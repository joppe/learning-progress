import type { EventHandlersConfig } from '@apestaartje/message-store/src/aggregator/event-handlers-config.type';
import type { Handlers } from '@apestaartje/message-store/src/component/handlers.type';
import type { StoredMessage } from '@apestaartje/message-store/src/db/stored-message/stored-message.type';
import { getId } from '@apestaartje/message-store/src/stream/get-id';

import type { DecrementedEvent } from './decremented-event.type';
import type { IncrementedEvent } from './incremented-event.type';
import { model } from './model';

export function eventHandlers({
  store,
  connection,
}: EventHandlersConfig): Handlers {
  return {
    Incremented: async (event: StoredMessage): Promise<void> => {
      const ev = event as IncrementedEvent;
      const id = getId(ev.stream_name);
      const ProgressModel = model(connection);

      await ProgressModel.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            resourceId: ev.data.resourceId,
            step: ev.data.step,
            position: ev.position,
          },
        },
        { upsert: true },
      );
    },
    Decremented: async (event: StoredMessage): Promise<void> => {
      const ev = event as DecrementedEvent;
      const id = getId(ev.stream_name);
      const ProgressModel = model(connection);

      await ProgressModel.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            resourceId: ev.data.resourceId,
            step: ev.data.step,
            position: ev.position,
          },
        },
        { upsert: true },
      );
    },
  };
}
