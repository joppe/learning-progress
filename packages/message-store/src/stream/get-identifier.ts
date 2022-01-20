import { getCategory } from './get-category';

const IDENTIFIER_SEPARATOR = ':';

/**
 * streamName will be in the form `<category>-<uuid>`, where
 * category can be `<identifier>` or `<identifier>:<command>`
 */
export function getIdentifier(streamName: string): string {
  const category = getCategory(streamName);
  const identifier = category.split(IDENTIFIER_SEPARATOR).shift();

  if (identifier === undefined) {
    throw new Error(`Identifier not found on stream name "${streamName}"`);
  }

  return identifier;
}
