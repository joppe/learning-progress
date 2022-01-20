import type { Connection, Model } from 'mongoose';

import { schema } from './schema';
import type { StoredMessage } from './stored-message.type';

export function model(conn: Connection): Model<StoredMessage> {
  return conn.model<StoredMessage>('Message', schema);
}
