import type { Db } from './db/db.type';

export type ReadConfig = {
  database: Db;
  streamName: string;
  fromPosition?: number;
  maxMessages?: number;
};
