import type { StoredMessage } from '@apestaartje/message-store/src/db/stored-message/stored-message.type';
import type { Projection } from '@apestaartje/message-store/src/project/projection.type';

import type { AddedEvent } from './add/added-event.type';
import { initial } from './initial';
import type { Resource } from './resource.type';

export function projection(): Projection<Resource> {
  return {
    init() {
      return initial();
    },

    handlers: {
      Added: (resource: Resource, message: StoredMessage): Resource => {
        const msg = message as AddedEvent;

        resource.id = msg.data.id;
        resource.title = msg.data.title;
        resource.type = msg.data.type;
        resource.topic = msg.data.topic;
        resource.parts.count = msg.data.parts.count;
        resource.parts.type = msg.data.parts.type;
        resource.isAdded = true;

        return resource;
      },
    },
  };
}
