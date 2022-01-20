import type { Connection, Model } from 'mongoose';

import type { Resource } from './resource.type';
import { schema } from './schema';

export function model(conn: Connection): Model<Resource> {
  return conn.model<Resource>('Resource', schema);
}
