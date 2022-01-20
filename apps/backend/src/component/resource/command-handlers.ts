import type { CommandHandlersConfig } from '@apestaartje/message-store/src/component/command-handlers-config.type';
import type { Handlers } from '@apestaartje/message-store/src/component/handlers.type';
import type { StoredMessage } from '@apestaartje/message-store/src/db/stored-message/stored-message.type';

import type { AddCommand } from './add/add-command.type';
import type { AddContext } from './add/add-context.type';
import { ensureNotAdded } from './add/ensure-not-added';
import { loadResource } from './add/load-resource';
import { writeAddedEvent } from './add/write-added-event';

export function commandHandlers({ store }: CommandHandlersConfig): Handlers {
  return {
    Add: async (command: StoredMessage): Promise<void> => {
      const com = command as AddCommand;
      const context: AddContext = {
        store,
        command: com,
        resource: null,
        resourceId: com.data.id,
      };

      await Promise.resolve(context)
        .then((c: AddContext) => {
          return loadResource(c);
        })
        .then((c) => {
          return ensureNotAdded(c);
        })
        .then((c) => {
          return writeAddedEvent(c);
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
