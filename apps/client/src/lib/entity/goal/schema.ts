import mongoose from 'mongoose';
import type { Goal } from './goal';

const { Schema } = mongoose;

export const schema = new Schema<Goal>({
  resource: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  topic: {
    type: String,
    required: true,
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
  progress: {
    started: Date,
    last_update: Date,
    current: Number,
  },
  goal: {
    parts: {
      type: Number,
      required: true,
    },
    days: {
      type: Number,
      required: true,
    },
  },
});
