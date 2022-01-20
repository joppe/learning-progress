import { Schema } from 'mongoose';

import type { Resource } from './resource.type';

export const schema = new Schema<Resource>({
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
  },
  parts: {
    count: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  position: {
    type: Number,
    required: true,
  },
  time: {
    type: Number,
    default: Date.now,
  },
});
