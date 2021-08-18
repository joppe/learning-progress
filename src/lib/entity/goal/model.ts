import { model } from 'mongoose';
import type { Goal } from './goal';
import { schema } from './schema';

export const Model = model<Goal>('Goal', schema);
