import { dbUrl } from '$lib/variables';
import type { Connection } from 'mongoose';
import { createConnection } from 'mongoose';

export async function connect(): Promise<Connection> {
  return await createConnection(dbUrl);
}
