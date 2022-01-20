import type { Progress } from '../progress.type';
import { projection } from '../projection';
import type { IncrementContext } from './increment-context.type';

export async function loadProgress(
  context: IncrementContext,
): Promise<IncrementContext> {
  const { store, progressId } = context;
  const streamName = `progress-${progressId}`;

  return store
    .fetch({ streamName, projection: projection() })
    .then((progress: Progress) => {
      context.progress = progress;

      return context;
    });
}
