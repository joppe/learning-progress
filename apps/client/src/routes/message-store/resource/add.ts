import * as crypto from 'crypto';

import type { StoredMessage } from '@apestaartje/message-store/src/db/stored-message/stored-message.type';
import { messageStore } from '@apestaartje/message-store/src/message-store';
import { create } from '@apestaartje/message-store/src/message/create';
import type { EndpointOutput } from '@sveltejs/kit';
import type { ServerRequest } from '@sveltejs/kit/types/hooks';
import { connect } from '$lib/database/connect';

import type { Locals } from '../../../locals.type';

type Resource = {
  title: string;
  type: string;
  topic: string;
  parts_count: number;
  parts_type: string;
};

export async function post(
  request: ServerRequest<Locals, Resource>,
): Promise<EndpointOutput<StoredMessage<Resource, Locals>>> {
  const conn = await connect();
  const store = messageStore(conn);
  const id = crypto.randomUUID();
  const data = {
    id,
    title: request.body.title,
    type: request.body.type,
    topic: request.body.topic,
    parts_count: request.body.parts_count,
    parts_type: request.body.parts_type,
  };
  const metadata = {
    traceId: request.locals.traceId,
  };
  const message = create({ type: 'Add', data, metadata });
  const result = (await store.write({
    streamName: `resource:command-${id}`,
    message,
  })) as StoredMessage<Resource, Locals>;

  return {
    body: result,
  };
}
