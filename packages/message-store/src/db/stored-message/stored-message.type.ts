/**
 * _id holds the same value as stream_name
 */

export type StoredMessage<
  Data extends Record<string, unknown> = Record<string, unknown>,
  Metadata extends Record<string, unknown> = Record<string, unknown>
> = {
  _id: string;
  category: string;
  stream_name: string;
  type: string;
  position: number;
  global_position: number;
  data: Data;
  metadata: Metadata;
  time: number;
};
