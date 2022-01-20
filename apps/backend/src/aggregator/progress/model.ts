import type { Connection, Model } from 'mongoose';

import type { Progress } from './progress.type';
import { schema } from './schema';

export function model(conn: Connection): Model<Progress> {
  return conn.model<Progress>('Progress', schema);
}
