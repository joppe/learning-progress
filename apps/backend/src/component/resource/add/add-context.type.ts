import type { MessageStore } from '@apestaartje/message-store/src/message-store.type';

import type { Resource } from '../resource.type';
import type { AddCommand } from './add-command.type';

export type AddContext = {
  store: MessageStore;
  command: AddCommand;
  resource: Resource | null;
  resourceId: string;
};
