import type { Connection } from 'mongoose';

import type { MessageStore } from '../message-store.type';

export type EventHandlersConfig = {
  store: MessageStore;
  connection: Connection;
};
