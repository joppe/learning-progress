import type { StoredMessage } from '@apestaartje/message-store/src/db/stored-message/stored-message.type';
import type { Projection } from '@apestaartje/message-store/src/project/projection.type';

import type { DecrementedEvent } from './decrement/decremented-event.type';
import type { IncrementedEvent } from './increment/incremented-event.type';
import { initial } from './initial';
import type { Progress } from './progress.type';

export function projection(): Projection<Progress> {
  return {
    init() {
      return initial();
    },

    handlers: {
      Incremented: (progress: Progress, message: StoredMessage): Progress => {
        const msg = message as IncrementedEvent;

        progress.id = msg.data.id;
        progress.step = msg.data.step;
        progress.resourceId = msg.data.resourceId;
        progress.isAdded = true;

        return progress;
      },
      Decremented: (progress: Progress, message: StoredMessage): Progress => {
        const msg = message as DecrementedEvent;

        progress.id = msg.data.id;
        progress.step = msg.data.step;
        progress.resourceId = msg.data.resourceId;
        progress.isAdded = true;

        return progress;
      },
    },
  };
}
