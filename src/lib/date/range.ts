import { addDays } from './add-days';
import { startOfWeek } from './start-of-week';

export function range(date: Date, length: number): Date[] {
  const start = startOfWeek(date);

  return Array.from(
    { length },
    (_, i: number): Date => {
      return addDays(start, i);
    },
  );
}
