import { startOfWeek } from './start-of-week';

describe('startOfWeek', (): void => {
  it('return a date object that is set to the start of the week', (): void => {
    const date = startOfWeek(new Date(2021, 10, 18, 19, 23, 33));

    expect(date.getDate()).toBe(15);
    expect(date.getHours()).toBe(0);
    expect(date.getMinutes()).toBe(0);
    expect(date.getSeconds()).toBe(0);
  });
});
