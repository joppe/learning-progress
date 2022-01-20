import type { Model } from 'mongoose';

import { GLOBAL_POSITION_KEY } from '../constants';
import type { IncrementConfig } from './increment-config.type';
import type { Position } from './position.type';
import type { UpdatePositionResult } from './update-position-result.type';

async function inc(
  PositionModel: Model<Position>,
  streamName: string,
): Promise<number> {
  const document = await PositionModel.findByIdAndUpdate(
    streamName,
    {
      $inc: { position: 1 },
    },
    { new: true },
  ).exec();

  if (document) {
    return document.position;
  }

  const position = new PositionModel({
    _id: streamName,
    stream_name: streamName,
    position: 1,
  });

  const newDocument = await position.save();

  return newDocument.position;
}

export async function increment({
  PositionModel,
  streamName,
}: IncrementConfig): Promise<UpdatePositionResult> {
  const [position, globalPosition] = await Promise.all([
    inc(PositionModel, streamName),
    inc(PositionModel, GLOBAL_POSITION_KEY),
  ]);

  return {
    position,
    globalPosition,
  };
}
