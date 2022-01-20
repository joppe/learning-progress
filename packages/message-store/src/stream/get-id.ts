import { ENTITY_SEPARATOR } from './entity-separator';

export function getId(streamName: string): string {
  const rest = streamName.split(ENTITY_SEPARATOR).slice(1);

  return rest.join(ENTITY_SEPARATOR);
}
