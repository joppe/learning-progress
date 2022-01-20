import { AlreadyAddedError } from '../../already-added-error';
import type { IncrementContext } from './increment-context.type';

export function ensureNotAdded(context: IncrementContext): IncrementContext {
  if (context.progress?.isAdded) {
    throw new AlreadyAddedError('Increment progress already added');
  }

  return context;
}
