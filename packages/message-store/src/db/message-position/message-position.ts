import type { Connection } from 'mongoose';

import { current } from './current';
import { increment } from './increment';
import type { MessagePosition } from './message-position.type';
import { model } from './model';

export function messagePosition(conn: Connection): MessagePosition {
  const PositionModel = model(conn);

  return {
    current(streamName: string): ReturnType<typeof current> {
      return current({ PositionModel, streamName });
    },
    increment(streamName: string): ReturnType<typeof increment> {
      return increment({ PositionModel, streamName });
    },
  };
}
