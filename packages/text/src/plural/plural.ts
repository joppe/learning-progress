import type { Dictionary } from './dictionary.type';
import type { Plural } from './plural.type';

export function plural(dictionary: Dictionary): Plural {
  return (word: string, count: number) => {
    if (count === 1) {
      return word;
    }

    if (dictionary[word] === undefined) {
      return `${word}s`;
    }

    return dictionary[word];
  };
}
