import { MONDAY } from './days';
import { startOfDay } from './start-of-day';

export function startOfWeek(currentDate: Date): Date {
  const date = startOfDay(currentDate);

  while (date.getDay() !== MONDAY) {
    date.setDate(date.getDate() - 1);
  }

  return date;
}
