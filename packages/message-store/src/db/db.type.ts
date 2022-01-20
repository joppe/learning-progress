import type { StoredMessage } from './stored-message/stored-message.type';

export type Db = {
  read(
    streamName: string,
    fromPosition: number,
    maxMessages: number,
  ): Promise<StoredMessage[]>;

  readLastMessage(streamName: string): Promise<StoredMessage | undefined>;

  write(
    streamName: string,
    type: string,
    data: Record<string, unknown>,
    metadata: Record<string, unknown>,
    expectedVersion?: number,
  ): Promise<StoredMessage>;
};
