import type { FetchConfig } from './fetch-config.type';
import { project } from './project/project';
import { read } from './read';

export async function fetch<Entity>({
  database,
  streamName,
  projection,
}: FetchConfig<Entity>): Promise<Entity> {
  return read({ database, streamName }).then((messages) => {
    return project(messages, projection);
  });
}
