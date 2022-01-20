import { messageStore } from '@apestaartje/message-store/src/message-store';
import { createConnection } from 'mongoose';

import { progress as progressAggregators } from './aggregator/progress/progress';
import { resource as resourceAggregators } from './aggregator/resource/resource';
import { progress as progressComponents } from './component/progress/progress';
import { resource as resourceComponents } from './component/resource/resource';
import { dbUrl, messageStoreDbUrl } from './config';

async function initialize(): Promise<void> {
  const conn = createConnection(messageStoreDbUrl as string);
  const store = messageStore(createConnection(dbUrl as string));
  const components = [resourceComponents(store), progressComponents(store)];
  const aggregators = [
    resourceAggregators(store, conn),
    progressAggregators(store, conn),
  ];

  components.forEach((component) => {
    component.start();
  });

  aggregators.forEach((aggregator) => {
    aggregator.start();
  });
}

initialize();
