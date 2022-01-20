import type { StoredMessage } from '@apestaartje/message-store/src/db/stored-message/stored-message.type';

type IncrementedEventData = {
  id: string;
  resourceId: string;
  step: number;
};

type IncrementedEventMetadata = {
  traceId: string;
};

export type IncrementedEvent = StoredMessage<
  IncrementedEventData,
  IncrementedEventMetadata
>;
