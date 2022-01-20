import type { StoredMessage } from './db/stored-message/stored-message.type';
import type { ReadConfig } from './read-config.type';

export async function read({
  database,
  streamName,
  fromPosition = 0,
  maxMessages = 1000,
}: ReadConfig): Promise<StoredMessage[]> {
  return await database.read(streamName, fromPosition, maxMessages);
}
