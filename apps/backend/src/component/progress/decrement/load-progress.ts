import type { Progress } from '../progress.type';
import { projection } from '../projection';
import type { DecrementContext } from './decrement-context.type';

export async function loadProgress(
  context: DecrementContext,
): Promise<DecrementContext> {
  const { store, progressId } = context;
  const streamName = `progressDecrement-${progressId}`;

  return store
    .fetch({ streamName, projection: projection() })
    .then((progress: Progress) => {
      context.progress = progress;

      return context;
    });
}
