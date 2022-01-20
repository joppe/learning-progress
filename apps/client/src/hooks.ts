import crypto from 'crypto';
import type { ServerRequest, ServerResponse } from '@sveltejs/kit/types/hooks';
import type { Locals } from './locals.type';

export async function handle<Body = unknown>({
  request,
  resolve,
}: {
  request: ServerRequest<Locals, Body>;
  resolve(
    request: ServerRequest<Locals, Body>,
  ): ServerResponse | Promise<ServerResponse>;
}): Promise<ServerResponse> {
  const traceId = crypto.randomUUID();

  request.locals.traceId = traceId;

  const response = await resolve(request);

  return {
    ...response,
    headers: {
      ...response.headers,
      'trace-id': traceId,
    },
  };
}
