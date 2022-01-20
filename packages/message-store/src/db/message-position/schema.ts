import { Schema } from 'mongoose';

import type { Position } from './position.type';

export const schema = new Schema<Position>({
  _id: {
    type: String,
    required: true,
  },
  stream_name: {
    type: String,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
});
