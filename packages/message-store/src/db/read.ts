import { getCategory } from '../stream/get-category';
import { isEntityStream } from '../stream/is-entity-stream';
import type { ReadConfig } from './read-config.type';
import type { StoredMessage } from './stored-message/stored-message.type';

export async function read({
  StoredMessageModel,
  streamName,
  fromPosition = 0,
  maxMessages = 1000,
}: ReadConfig): Promise<StoredMessage[]> {
  if (isEntityStream(streamName)) {
    return await StoredMessageModel.find({
      stream_name: streamName,
    })
      .where('position')
      .gte(fromPosition)
      .sort({ global_position: 1 })
      .limit(maxMessages)
      .exec();
  } else {
    const category = getCategory(streamName);

    return await StoredMessageModel.find({
      category,
    })
      .where('global_position')
      .gte(fromPosition)
      .sort({ global_position: 1 })
      .limit(maxMessages)
      .exec();
  }
}
