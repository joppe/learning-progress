import { ENTITY_SEPARATOR } from './entity-separator';

export function isEntityStream(streamName: string): boolean {
  return streamName.includes(ENTITY_SEPARATOR);
}
