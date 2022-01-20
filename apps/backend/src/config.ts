import { config } from 'dotenv';

config();

export const dbUrl = process.env['DB_URL'];
export const messageStoreDbUrl = process.env['MESSAGE_STORE_DB_URL'];
