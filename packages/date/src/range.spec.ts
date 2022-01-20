import { range } from './range';

describe('range', (): void => {
  it('returns an array of dates', (): void => {
    const dates = range(new Date(2021, 10, 15), 10);

    expect(dates.length).toBe(10);
    expect(dates[0].getDate()).toBe(15);
    expect(dates[9].getDate()).toBe(24);
  });
});
