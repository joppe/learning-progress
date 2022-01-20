import { create } from '@apestaartje/message-store/src/message/create';
import { Message } from '@apestaartje/message-store/src/message/message.type';

import { AddContext } from './add-context.type';

export async function writeAddedEvent(
  context: AddContext,
): Promise<AddContext> {
  const { command, store } = context;
  const event: Message = create({
    type: 'Added',
    data: {
      id: command.data.id,
      title: command.data.title,
      type: command.data.type,
      topic: command.data.topic,
      parts: {
        count: command.data.parts_count,
        type: command.data.parts_type,
      },
    },
    metadata: {
      traceId: command.metadata.traceId,
    },
  });
  const streamName = `resource-${command.data.id}`;

  return store.write({ streamName, message: event }).then(() => {
    return context;
  });
}
