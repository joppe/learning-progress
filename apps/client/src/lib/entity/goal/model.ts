import mongoose from 'mongoose';
import type { Goal } from './goal';
import { schema } from './schema';

const { model } = mongoose;

export const Model = model<Goal>('Goal', schema);
