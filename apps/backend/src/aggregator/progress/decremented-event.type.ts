import type { StoredMessage } from '@apestaartje/message-store/src/db/stored-message/stored-message.type';

type DecrementedEventData = {
  id: string;
  resourceId: string;
  step: number;
};

type DecrementedEventMetadata = {
  traceId: string;
};

export type DecrementedEvent = StoredMessage<
  DecrementedEventData,
  DecrementedEventMetadata
>;
