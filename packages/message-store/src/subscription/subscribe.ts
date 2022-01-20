import * as crypto from 'crypto';

import type { StoredMessage } from '../db/stored-message/stored-message.type';
import type { Message } from '../message/message.type';
import { write } from '../write';
import type { SubscribeOptions } from './subscribe-options.type';
import type { Subscription } from './subscription.type';

export function subscribe({
  database,
  streamName,
  handlers,
  subscriberId,
  messagesPerTick = 100,
  positionUpdateInterval = 100,
  tickInterval = 100,
}: SubscribeOptions): Subscription {
  const subscriberStreamName = `subscriberPosition-${subscriberId}`;
  let currentPosition = 0;
  let messagesSinceLastPositionWrite = 0;
  let keepGoing = true;

  async function loadPosition(): Promise<number> {
    const lastMessage = await database.readLastMessage(subscriberStreamName);

    return lastMessage?.position ?? 0;
  }

  async function writePosition(position: number): Promise<void> {
    const event: Message = {
      id: crypto.randomUUID(),
      type: 'Read',
      data: {
        position,
      },
      metadata: {},
    };

    await write({ database, streamName: subscriberStreamName, message: event });
  }

  async function updatePosition(position: number): Promise<void> {
    currentPosition = position;
    messagesSinceLastPositionWrite += 1;

    if (messagesSinceLastPositionWrite === positionUpdateInterval) {
      messagesSinceLastPositionWrite = 0;

      await writePosition(position);
    }
  }

  async function getNextBatch(): Promise<StoredMessage[]> {
    return database.read(streamName, currentPosition + 1, messagesPerTick);
  }

  async function handleMessage(message: StoredMessage) {
    const handler = handlers[message.type] || handlers.$any;

    if (handler) {
      await handler(message);
    }
  }

  async function processBatch(messages: StoredMessage[]): Promise<number> {
    for (const message of messages) {
      await handleMessage(message);
      await updatePosition(message.global_position);
    }

    return messages.length;
  }

  function tick(): Promise<number> {
    return getNextBatch().then(processBatch);
  }

  async function poll() {
    await loadPosition();

    while (keepGoing) {
      const processed = await tick();

      if (processed === 0) {
        await new Promise((resolve) => {
          setTimeout(resolve, tickInterval);
        });
      }
    }
  }

  return {
    start() {
      poll();
    },
    stop() {
      keepGoing = false;
    },
  };
}
