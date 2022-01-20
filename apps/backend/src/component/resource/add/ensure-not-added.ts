import type { AddContext } from './add-context.type';
import { AlreadyAddedError } from './already-added-error';

export function ensureNotAdded(context: AddContext): AddContext {
  if (context.resource?.isAdded) {
    throw new AlreadyAddedError('Resource already added');
  }

  return context;
}
