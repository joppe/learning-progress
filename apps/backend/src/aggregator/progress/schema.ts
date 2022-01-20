import { Schema } from 'mongoose';

import type { Progress } from './progress.type';

export const schema = new Schema<Progress>({
  _id: {
    type: String,
    required: true,
  },
  resourceId: {
    type: String,
    required: true,
  },
  step: {
    type: Number,
    required: true,
  },
  time: {
    type: Number,
    default: Date.now,
  },
});
