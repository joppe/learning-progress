import type { Component } from '@apestaartje/message-store/src/component/component.type';
import type { MessageStore } from '@apestaartje/message-store/src/message-store.type';
import { Connection } from 'mongoose';

import { eventHandlers } from './event-handlers';

export function resource(
  messageStore: MessageStore,
  connection: Connection,
): ReturnType<Component> {
  const subscription = messageStore.subscribe({
    streamName: 'resource',
    handlers: eventHandlers({ store: messageStore, connection }),
    subscriberId: 'aggregators:resource',
  });

  return {
    start() {
      subscription.start();
    },
  };
}
