import type { EndpointOutput } from '@sveltejs/kit';
import { connect } from '$lib/database/connect';
import type { Goal } from '$lib/entity/goal/goal';
import { Model } from '$lib/entity/goal/model';

export async function get(): Promise<EndpointOutput<Goal[]>> {
  await connect();

  const query = Model.find({});
  const list = await query.exec();

  return {
    body: list,
  };
}
