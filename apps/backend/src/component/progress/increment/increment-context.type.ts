import type { MessageStore } from '@apestaartje/message-store/src/message-store.type';

import type { Progress } from '../progress.type';
import type { IncrementCommand } from './increment-command.type';

export type IncrementContext = {
  store: MessageStore;
  command: IncrementCommand;
  progress: Progress | null;
  progressId: string;
};
