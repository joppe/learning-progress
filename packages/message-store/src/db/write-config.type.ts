import type { Model } from 'mongoose';

import type { MessagePosition } from './message-position/message-position.type';
import type { StoredMessage } from './stored-message/stored-message.type';

export type WriteConfig = {
  StoredMessageModel: Model<StoredMessage>;
  position: MessagePosition;
  streamName: string;
  type: string;
  data: Record<string, unknown>;
  metadata: Record<string, unknown>;
  expectedVersion?: number;
};
