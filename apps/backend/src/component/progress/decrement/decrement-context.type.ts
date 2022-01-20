import type { MessageStore } from '@apestaartje/message-store/src/message-store.type';

import type { Progress } from '../progress.type';
import type { DecrementCommand } from './decrement-command.type';

export type DecrementContext = {
  store: MessageStore;
  command: DecrementCommand;
  progress: Progress | null;
  progressId: string;
};
