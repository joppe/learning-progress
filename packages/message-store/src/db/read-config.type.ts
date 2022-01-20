import type { Model } from 'mongoose';

import type { StoredMessage } from './stored-message/stored-message.type';

export type ReadConfig = {
  StoredMessageModel: Model<StoredMessage>;
  streamName: string;
  fromPosition?: number;
  maxMessages?: number;
};
