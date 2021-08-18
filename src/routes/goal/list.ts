import { Model } from '$lib/entity/goal/model';
import { dbUrl } from '$lib/variables';
import { connect } from 'mongoose';

export async function get() {
  await connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const query = Model.find({});
  const list = await query.exec();

  return {
    body: list,
  };
}
