import { create } from '@apestaartje/message-store/src/message/create';
import { Message } from '@apestaartje/message-store/src/message/message.type';

import { IncrementContext } from './increment-context.type';

export async function writeIncrementedEvent(
  context: IncrementContext,
): Promise<IncrementContext> {
  const { command, store } = context;
  const event: Message = create({
    type: 'Incremented',
    data: {
      id: command.data.id,
      resourceId: command.data.resourceId,
      step: command.data.step,
    },
    metadata: {
      traceId: command.metadata.traceId,
    },
  });
  const streamName = `progress-${command.data.id}`;

  return store.write({ streamName, message: event }).then(() => {
    return context;
  });
}
