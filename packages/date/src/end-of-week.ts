import { SUNDAY } from './days';
import { startOfDay } from './start-of-day';

export function endOfWeek(currentDate: Date): Date {
  const date = startOfDay(currentDate);

  while (date.getDay() !== SUNDAY) {
    date.setDate(date.getDate() + 1);
  }

  return date;
}
