import { AlreadyAddedError } from '../../already-added-error';
import type { DecrementContext } from './decrement-context.type';

export function ensureNotAdded(context: DecrementContext): DecrementContext {
  if (context.progress?.isAdded) {
    throw new AlreadyAddedError('Decrement progress already added');
  }

  return context;
}
