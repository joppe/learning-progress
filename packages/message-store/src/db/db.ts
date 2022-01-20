import type { Connection } from 'mongoose';

import type { Db } from './db.type';
import { messagePosition } from './message-position/message-position';
import { read } from './read';
import { readLastMessage } from './read-last-message';
import { model } from './stored-message/model';
import type { StoredMessage } from './stored-message/stored-message.type';
import { write } from './write';

export function db(conn: Connection): Db {
  const StoredMessageModel = model(conn);
  const position = messagePosition(conn);

  return {
    read(
      streamName: string,
      fromPosition = 0,
      maxMessages = 1000,
    ): Promise<StoredMessage[]> {
      return read({
        StoredMessageModel: StoredMessageModel,
        streamName,
        fromPosition,
        maxMessages,
      });
    },

    readLastMessage(streamName: string): Promise<StoredMessage | undefined> {
      return readLastMessage({
        StoredMessageModel: StoredMessageModel,
        streamName,
      });
    },

    write(
      streamName: string,
      type: string,
      data: Record<string, unknown>,
      metadata: Record<string, unknown>,
      expectedVersion?: number,
    ): Promise<StoredMessage> {
      return write({
        StoredMessageModel: StoredMessageModel,
        position,
        streamName,
        type,
        data,
        metadata,
        expectedVersion,
      });
    },
  };
}
