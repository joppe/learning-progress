import type { Db } from '../db/db.type';
import type { MessageHandler } from './message-handler.type';

export type SubscribeOptions = {
  database: Db;
  streamName: string;
  handlers: Record<string, MessageHandler>;
  subscriberId: string;
  messagesPerTick?: number;
  positionUpdateInterval?: number;
  tickInterval?: number;
};
