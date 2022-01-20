import type { StoredMessage } from '../db/stored-message/stored-message.type';
import type { Projection } from './projection.type';

export function project<Entity>(
  messages: StoredMessage[],
  projection: Projection<Entity>,
): Entity {
  return messages.reduce((entity: Entity, message: StoredMessage): Entity => {
    if (projection.handlers[message.type]) {
      return projection.handlers[message.type](entity, message);
    }

    return entity;
  }, projection.init());
}
