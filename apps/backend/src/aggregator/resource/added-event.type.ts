import type { StoredMessage } from '@apestaartje/message-store/src/db/stored-message/stored-message.type';

type AddedEventData = {
  id: string;
  title: string;
  type: string;
  topic: string;
  parts: {
    count: number;
    type: string;
  };
};

type AddedEventMetadata = {
  traceId: string;
};

export type AddedEvent = StoredMessage<AddedEventData, AddedEventMetadata>;
