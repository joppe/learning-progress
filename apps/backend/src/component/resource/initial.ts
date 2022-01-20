import type { Resource } from './resource.type';

export function initial(): Resource {
  return {
    id: '',
    title: '',
    type: '',
    topic: '',
    parts: {
      count: 0,
      type: '',
    },
    isAdded: false,
  };
}
