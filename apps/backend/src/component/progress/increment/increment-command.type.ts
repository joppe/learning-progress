import type { StoredMessage } from '@apestaartje/message-store/src/db/stored-message/stored-message.type';

type IncrementCommandData = {
  id: string;
  resourceId: string;
  step: number;
};

type IncrementCommandMetadata = {
  traceId: string;
};

export type IncrementCommand = StoredMessage<
  IncrementCommandData,
  IncrementCommandMetadata
>;
