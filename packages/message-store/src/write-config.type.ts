import type { Db } from './db/db.type';
import type { Message } from './message/message.type';

export type WriteConfig = {
  database: Db;
  streamName: string;
  message: Message;
  expectedVersion?: number;
};
