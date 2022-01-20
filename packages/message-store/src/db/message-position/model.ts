import type { Connection, Model } from 'mongoose';

import type { Position } from './position.type';
import { schema } from './schema';

export function model(conn: Connection): Model<Position> {
  return conn.model<Position>('Position', schema);
}
