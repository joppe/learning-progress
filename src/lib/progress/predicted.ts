import type { Goal } from '$lib/entity/goal/goal';
import { startOfDay } from '$lib/date/start-of-day';
import { diffInDays } from '$lib/date/diff-in-days';

export function predicted(goal: Goal): number {
  if (goal.progress?.started === undefined) {
    return 0;
  }

  const today = startOfDay(new Date());
  const started = startOfDay(new Date(goal.progress.started));
  const days = diffInDays(started, today) + 1;
  const perDay = goal.goal.parts / goal.goal.days;

  return perDay * days;
}
