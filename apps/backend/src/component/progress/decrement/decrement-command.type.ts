import type { StoredMessage } from '@apestaartje/message-store/src/db/stored-message/stored-message.type';

type DecrementCommandData = {
  id: string;
  resourceId: string;
  step: number;
};

type DecrementCommandMetadata = {
  traceId: string;
};

export type DecrementCommand = StoredMessage<
  DecrementCommandData,
  DecrementCommandMetadata
>;
