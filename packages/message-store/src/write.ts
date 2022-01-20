import type { StoredMessage } from './db/stored-message/stored-message.type';
import type { WriteConfig } from './write-config.type';

export async function write({
  database,
  streamName,
  message,
  expectedVersion,
}: WriteConfig): Promise<StoredMessage> {
  if (!message.type) {
    throw new Error('Message must have a type');
  }

  return await database.write(
    streamName,
    message.type,
    message.data,
    message.metadata,
    expectedVersion,
  );
}
