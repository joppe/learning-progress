import { startOfDay } from './start-of-day';

const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

export function diffInDays(a: Date, b: Date): number {
  const end = startOfDay(b).getTime();
  const start = startOfDay(a).getTime();
  const diff = end - start;

  return Math.abs(diff / DAY_IN_MILLISECONDS);
}
