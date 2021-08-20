const dictionary = {
  day: 'days',
  recipe: 'recipes',
};

export function plural(word: string, count: number): string {
  if (count === 1) {
    return word;
  }

  if (dictionary[word] === undefined) {
    return `${word}s`;
  }

  return dictionary[word];
}
