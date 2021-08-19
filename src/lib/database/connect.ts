import { dbUrl } from '$lib/variables';
import { connect as conn } from 'mongoose';

export async function connect(): Promise<void> {
  await conn(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
