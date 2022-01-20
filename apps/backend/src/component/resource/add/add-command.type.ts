import type { StoredMessage } from '@apestaartje/message-store/src/db/stored-message/stored-message.type';

type AddCommandData = {
  id: string;
  title: string;
  type: string;
  topic: string;
  parts_count: number;
  parts_type: string;
};

type AddCommandMetadata = {
  traceId: string;
};

export type AddCommand = StoredMessage<AddCommandData, AddCommandMetadata>;
