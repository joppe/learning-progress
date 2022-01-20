import { ENTITY_SEPARATOR } from './entity-separator';

/**
 * streamName will be in the form `<category>-<uuid>`
 */
export function getCategory(streamName: string): string {
  const category = streamName.split(ENTITY_SEPARATOR).shift();

  if (category === undefined) {
    throw new Error(`Category not found on stream name "${streamName}"`);
  }

  return category;
}
