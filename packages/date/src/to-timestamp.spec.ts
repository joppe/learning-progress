import { toTimestamp } from './to-timestamp';

describe('toTimestamp', (): void => {
  it('return a date object that is set to the start of the day', (): void => {
    const timestamp = toTimestamp(new Date(2021, 10, 15, 19, 23, 33));

    expect(timestamp).toBe(1637000613);
  });

  it('if provided in milliseconds', (): void => {
    const timestamp = toTimestamp(new Date(2021, 10, 15, 19, 23, 33), true);

    expect(timestamp).toBe(1637000613000);
  });
});
