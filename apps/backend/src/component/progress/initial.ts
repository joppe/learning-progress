import type { Progress } from './progress.type';

export function initial(): Progress {
  return {
    id: '',
    resourceId: '',
    step: 0,
    isAdded: false,
  };
}
