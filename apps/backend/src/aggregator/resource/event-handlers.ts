import type { EventHandlersConfig } from '@apestaartje/message-store/src/aggregator/event-handlers-config.type';
import type { Handlers } from '@apestaartje/message-store/src/component/handlers.type';
import type { StoredMessage } from '@apestaartje/message-store/src/db/stored-message/stored-message.type';
import { getId } from '@apestaartje/message-store/src/stream/get-id';

import type { AddedEvent } from './added-event.type';
import { model } from './model';

export function eventHandlers({
  store,
  connection,
}: EventHandlersConfig): Handlers {
  return {
    Added: async (event: StoredMessage): Promise<void> => {
      const ev = event as AddedEvent;
      const id = getId(ev.stream_name);
      const ResourceModel = model(connection);
      const resource = new ResourceModel({
        _id: id,
        title: ev.data.title,
        type: ev.data.type,
        topic: ev.data.topic,
        parts: {
          count: ev.data.parts.count,
          type: ev.data.parts.type,
        },
        position: ev.position,
      });

      resource.save();
    },
  };
}
