import type { Goal } from '$lib/entity/goal/goal';

export function percentage(goal: Goal): number {
  if (!goal.progress?.current) {
    return 0;
  }

  return 100 * (goal.progress.current / goal.parts.count);
}
