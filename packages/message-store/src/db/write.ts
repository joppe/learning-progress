import { getCategory } from '../stream/get-category';
import { readLastMessage } from './read-last-message';
import type { StoredMessage } from './stored-message/stored-message.type';
import type { WriteConfig } from './write-config.type';

export async function write({
  StoredMessageModel,
  position,
  streamName,
  type,
  data,
  metadata,
  expectedVersion,
}: WriteConfig): Promise<StoredMessage> {
  if (expectedVersion !== undefined) {
    const lastMessage = await readLastMessage({
      StoredMessageModel,
      streamName,
    });

    if (lastMessage && expectedVersion !== lastMessage.position) {
      throw new Error(
        `Expected version does not match, expected "${expectedVersion}" but got ${lastMessage.position}`,
      );
    }
  }

  const positions = await position.increment(streamName);
  const category = getCategory(streamName);
  const storedMessage = new StoredMessageModel({
    _id: streamName,
    category,
    stream_name: streamName,
    type,
    position: positions.position,
    global_position: positions.globalPosition,
    data,
    metadata,
  });
  const result = await storedMessage.save();

  return {
    _id: result._id,
    category: result.category,
    stream_name: result.stream_name,
    type: result.type,
    position: result.position,
    global_position: result.global_position,
    data: result.data,
    metadata: result.metadata,
    time: result.time,
  };
}
