import type { StoredMessage } from '../db/stored-message/stored-message.type';
import type { Message } from '../message/message.type';

export function documentToMessage(document: StoredMessage): Message {
  return {
    id: document._id,
    type: document.type,
    metadata: document.metadata,
    data: document.data,
  };
}
