export type Resource = {
  id: string;
  title: string;
  type: string;
  topic: string;
  parts: {
    count: number;
    type: string;
  };
  isAdded: boolean;
};
