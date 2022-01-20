import { current } from './current';
import { increment } from './increment';

export type MessagePosition = {
  current(streamName?: string): ReturnType<typeof current>;
  increment(streamName: string): ReturnType<typeof increment>;
};
