import type { Model } from 'mongoose';

import type { Position } from './position.type';

export type CurrentConfig = {
  PositionModel: Model<Position>;
  streamName?: string;
};
