import type { Model } from 'mongoose';

import type { StoredMessage } from './stored-message/stored-message.type';

export type ReadLastMessageConfig = {
  StoredMessageModel: Model<StoredMessage>;
  streamName: string;
};
