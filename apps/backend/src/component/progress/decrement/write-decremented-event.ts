import { create } from '@apestaartje/message-store/src/message/create';
import { Message } from '@apestaartje/message-store/src/message/message.type';

import { DecrementContext } from './decrement-context.type';

export async function writeDecrementedEvent(
  context: DecrementContext,
): Promise<DecrementContext> {
  const { command, store } = context;
  const event: Message = create({
    type: 'Decremented',
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
