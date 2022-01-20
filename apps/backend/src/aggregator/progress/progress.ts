import type { Component } from '@apestaartje/message-store/src/component/component.type';
import type { MessageStore } from '@apestaartje/message-store/src/message-store.type';
import { Connection } from 'mongoose';

import { eventHandlers } from './event-handlers';

export function progress(
  messageStore: MessageStore,
  connection: Connection,
): ReturnType<Component> {
  const subscription = messageStore.subscribe({
    streamName: 'progress',
    handlers: eventHandlers({ store: messageStore, connection }),
    subscriberId: 'aggregators:progress',
  });

  return {
    start() {
      subscription.start();
    },
  };
}
