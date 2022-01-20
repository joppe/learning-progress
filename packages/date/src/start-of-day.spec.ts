import { startOfDay } from './start-of-day';

describe('startOfDay', (): void => {
  it('return a date object that is set to the start of the day', (): void => {
    const date = startOfDay(new Date(2021, 10, 15, 19, 23, 33));

    expect(date.getHours()).toBe(0);
    expect(date.getMinutes()).toBe(0);
    expect(date.getSeconds()).toBe(0);
  });
});
