import type { Model } from 'mongoose';

import type { Position } from './position.type';

export type IncrementConfig = {
  PositionModel: Model<Position>;
  streamName: string;
};
