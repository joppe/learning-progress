import type { CommandHandlersConfig } from '@apestaartje/message-store/src/component/command-handlers-config.type';
import type { Handlers } from '@apestaartje/message-store/src/component/handlers.type';
import type { StoredMessage } from '@apestaartje/message-store/src/db/stored-message/stored-message.type';

import type { DecrementCommand } from './decrement/decrement-command.type';
import type { DecrementContext } from './decrement/decrement-context.type';
import { ensureNotAdded as ensureDecrementNotAdded } from './decrement/ensure-not-added';
import { loadProgress as loadDecrementProgress } from './decrement/load-progress';
import { writeDecrementedEvent } from './decrement/write-decremented-event';
import { ensureNotAdded as ensureIncrementNotAdded } from './increment/ensure-not-added';
import type { IncrementCommand } from './increment/increment-command.type';
import type { IncrementContext } from './increment/increment-context.type';
import { loadProgress as loadIncrementProgress } from './increment/load-progress';
import { writeIncrementedEvent } from './increment/write-incremented-event';

export function commandHandlers({ store }: CommandHandlersConfig): Handlers {
  return {
    Increment: async (command: StoredMessage): Promise<void> => {
      const com = command as IncrementCommand;
      const context: IncrementContext = {
        store,
        command: com,
        progress: null,
        progressId: com.data.id,
      };

      await Promise.resolve(context)
        .then((c: IncrementContext) => {
          return loadIncrementProgress(c);
        })
        .then((c) => {
          return ensureIncrementNotAdded(c);
        })
        .then((c) => {
          return writeIncrementedEvent(c);
        })
        .catch((error) => {
          if (error.name === 'AlreadyAddedError') {
          } else {
            throw new Error(error.message);
          }
        });
    },
    Decrement: async (command: StoredMessage): Promise<void> => {
      const com = command as DecrementCommand;
      const context: DecrementContext = {
        store,
        command: com,
        progress: null,
        progressId: com.data.id,
      };

      await Promise.resolve(context)
        .then((c: DecrementContext) => {
          return loadDecrementProgress(c);
        })
        .then((c) => {
          return ensureDecrementNotAdded(c);
        })
        .then((c) => {
          return writeDecrementedEvent(c);
        })
        .catch((error) => {
          if (error.name === 'AlreadyAddedError') {
            console.log(error.message);
          } else {
            throw new Error(error.message);
          }
        });
    },
  };
}
