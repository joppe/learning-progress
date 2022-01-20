export type Message<
  Data extends Record<string, unknown> = Record<string, unknown>,
  Metadata extends Record<string, unknown> = Record<string, unknown>
> = {
  id: string;
  type: string;
  metadata: Metadata;
  data: Data;
};
