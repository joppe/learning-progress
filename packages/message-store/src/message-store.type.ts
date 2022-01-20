import type { StoredMessage } from './db/stored-message/stored-message.type';
import type { FetchConfig } from './fetch-config.type';
import type { ReadConfig } from './read-config.type';
import type { SubscribeOptions } from './subscription/subscribe-options.type';
import type { Subscription } from './subscription/subscription.type';
import type { WriteConfig } from './write-config.type';

export type MessageStore = {
  fetch<Entity>(config: Omit<FetchConfig<Entity>, 'database'>): Promise<Entity>;

  read(config: Omit<ReadConfig, 'database'>): Promise<StoredMessage[]>;

  readLastMessage(config: {
    streamName: string;
  }): Promise<StoredMessage | undefined>;

  write(config: Omit<WriteConfig, 'database'>): Promise<StoredMessage>;

  subscribe(config: Omit<SubscribeOptions, 'database'>): Subscription;
};
