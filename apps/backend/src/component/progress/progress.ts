import type { Component } from '@apestaartje/message-store/src/component/component.type';
import type { MessageStore } from '@apestaartje/message-store/src/message-store.type';

import { commandHandlers } from './command-handlers';

export function progress(messageStore: MessageStore): ReturnType<Component> {
  const subscription = messageStore.subscribe({
    streamName: 'progress:command',
    handlers: commandHandlers({ store: messageStore }),
    subscriberId: 'components:progress:command',
  });

  return {
    start() {
      subscription.start();
    },
  };
}
