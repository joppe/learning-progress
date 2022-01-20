export type Resource = {
  _id: string;
  title: string;
  type: string;
  topic: string;
  parts: {
    count: number;
    type: string;
  };
  position: number;
  time: number;
};
