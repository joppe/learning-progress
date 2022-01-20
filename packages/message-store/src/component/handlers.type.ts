import type { StoredMessage } from '../db/stored-message/stored-message.type';

export type Handlers = {
  [commandType: string]: (command: StoredMessage) => Promise<void>;
};
