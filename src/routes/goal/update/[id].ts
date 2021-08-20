import { connect } from '$lib/database/connect';
import type { Goal } from '$lib/entity/goal/goal';
import { Model } from '$lib/entity/goal/model';
import type { Request } from '@sveltejs/kit';

export async function put(
  request: Request<Record<string, string>, Goal>,
): Promise<Record<string, string | number>> {
  let error = 'error';

  await connect();

  const goal = request.body;

  if (goal.progress.started === undefined) {
    goal.progress.started = new Date();
  }

  goal.progress.last_update = new Date();

  try {
    const result = await Model.updateOne(
      {
        _id: request.params.id,
      },
      goal,
    );

    if (result.ok === 1) {
      return {};
    }
  } catch (e) {
    error = e.message;
  }

  return {
    status: 500,
    body: error,
  };
}
