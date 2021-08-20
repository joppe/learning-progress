import { dbUrl } from '$lib/variables';
import mongoose from 'mongoose';

const { connect: conn } = mongoose;

export async function connect(): Promise<void> {
  await conn(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
