import type { StoredMessage } from '../db/stored-message/stored-message.type';

export type Projection<Entity> = {
  init: () => Entity;
  handlers: {
    [type: string]: (resource: Entity, message: StoredMessage) => Entity;
  };
};
