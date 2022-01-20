import type { StoredMessage } from '../db/stored-message/stored-message.type';

export type MessageHandler = (message: StoredMessage) => Promise<void>;
