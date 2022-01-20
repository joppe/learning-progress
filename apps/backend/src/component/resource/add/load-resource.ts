import { projection } from '../projection';
import type { Resource } from '../resource.type';
import type { AddContext } from './add-context.type';

export async function loadResource(context: AddContext): Promise<AddContext> {
  const { store, resourceId } = context;
  const streamName = `resource-${resourceId}`;

  return store
    .fetch({ streamName, projection: projection() })
    .then((resource: Resource) => {
      context.resource = resource;

      return context;
    });
}
