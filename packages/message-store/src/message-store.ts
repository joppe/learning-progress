import { Connection } from 'mongoose';

import { db } from './db/db';
import type { StoredMessage } from './db/stored-message/stored-message.type';
import { fetch } from './fetch';
import type { FetchConfig } from './fetch-config.type';
import type { MessageStore } from './message-store.type';
import { read } from './read';
import type { ReadConfig } from './read-config.type';
import { subscribe } from './subscription/subscribe';
import type { SubscribeOptions } from './subscription/subscribe-options.type';
import type { Subscription } from './subscription/subscription.type';
import { write } from './write';
import type { WriteConfig } from './write-config.type';

export function messageStore(conn: Connection): MessageStore {
  const database = db(conn);

  return {
    fetch<Entity>({
      streamName,
      projection,
    }: Omit<FetchConfig<Entity>, 'database'>): Promise<Entity> {
      return fetch<Entity>({
        database,
        streamName,
        projection,
      });
    },

    readLastMessage({
      streamName,
    }: {
      streamName: string;
    }): Promise<StoredMessage | undefined> {
      return database.readLastMessage(streamName);
    },

    read({
      streamName,
      fromPosition = 0,
      maxMessages = 1000,
    }: Omit<ReadConfig, 'database'>): Promise<StoredMessage[]> {
      return read({ database, streamName, fromPosition, maxMessages });
    },

    write({
      streamName,
      message,
      expectedVersion,
    }: Omit<WriteConfig, 'database'>): Promise<StoredMessage> {
      return write({ database, streamName, message, expectedVersion });
    },

    subscribe({
      streamName,
      handlers,
      subscriberId,
      messagesPerTick = 100,
      positionUpdateInterval = 100,
      tickInterval = 100,
    }: Omit<SubscribeOptions, 'database'>): Subscription {
      return subscribe({
        database,
        streamName,
        handlers,
        subscriberId,
        messagesPerTick,
        positionUpdateInterval,
        tickInterval,
      });
    },
  };
}
