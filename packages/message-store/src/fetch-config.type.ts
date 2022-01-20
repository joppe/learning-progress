import type { Db } from './db/db.type';
import type { Projection } from './project/projection.type';

export type FetchConfig<Entity> = {
  database: Db;
  streamName: string;
  projection: Projection<Entity>;
};
