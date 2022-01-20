import type { ReadLastMessageConfig } from './read-last-message-config.type';
import type { StoredMessage } from './stored-message/stored-message.type';

export async function readLastMessage({
  StoredMessageModel,
  streamName,
}: ReadLastMessageConfig): Promise<StoredMessage | undefined> {
  const results = await StoredMessageModel.find({ stream_name: streamName })
    .sort({ global_position: -1 })
    .limit(1)
    .exec();

  if (results.length === 0) {
    return undefined;
  }

  return results[0];
}
