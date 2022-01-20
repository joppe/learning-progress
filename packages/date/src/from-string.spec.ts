import { fromString } from './from-string';

describe('fromString', (): void => {
  it('return a date object', (): void => {
    const date = fromString('1974-09-17');

    expect(date.getFullYear()).toBe(1974);
    expect(date.getMonth()).toBe(8);
    expect(date.getDate()).toBe(17);
  });
});
