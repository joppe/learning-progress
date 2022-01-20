import { plural } from './plural';
import { Plural } from './plural.type';

const dictionary = {
  book: 'books',
  trousers: 'trousers',
  glasses: 'glasses',
  cow: 'cows',
};

describe('plural', (): void => {
  let transform: Plural;

  beforeEach(() => {
    transform = plural(dictionary);
  });

  it('return a function that will create the plural of a word', (): void => {
    expect(typeof transform).toBe('function');
  });

  it('create plural when the count is greater then 1', () => {
    expect(transform('book', 3)).toBe('books');
  });

  it('do not create plural when the count is 1', () => {
    expect(transform('book', 1)).toBe('book');
  });

  it('use a fallback when word is not in dictionary', () => {
    expect(transform('bird', 2)).toBe('birds');
  });
});
