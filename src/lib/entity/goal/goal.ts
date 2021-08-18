export type Goal = {
  resource: {
    name: string;
    type: string;
  };
  topic: string;
  parts: {
    count: number;
    type: string;
  };
  progress: {
    started: Date;
    last_update: Date;
    current: number;
  };
  goal: {
    parts: number;
    days: number;
  };
};
