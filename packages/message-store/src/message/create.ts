import * as crypto from 'crypto';

import type { CreateConfig } from './create-config.type';
import type { Message } from './message.type';

export function create<
  Data extends Record<string, unknown>,
  Metadata extends Record<string, unknown>
>({
  type,
  data,
  metadata,
}: CreateConfig<Data, Metadata>): Message<Data, Metadata> {
  return {
    id: crypto.randomUUID(),
    type,
    data,
    metadata,
  };
}
