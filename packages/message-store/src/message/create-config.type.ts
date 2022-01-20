export type CreateConfig<
  Data extends Record<string, unknown>,
  Metadata extends Record<string, unknown>
> = {
  type: string;
  data: Data;
  metadata: Metadata;
};
