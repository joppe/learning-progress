import { Schema } from 'mongoose';

import type { StoredMessage } from './stored-message.type';

export const schema = new Schema<StoredMessage>({
  _id: {
    type: String,
    required: true,
  },
  stream_name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
  global_position: {
    type: Number,
    required: true,
  },
  data: Object,
  metadata: Object,
  time: {
    type: Number,
    default: Date.now,
  },
});
