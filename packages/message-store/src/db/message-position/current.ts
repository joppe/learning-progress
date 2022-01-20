import { GLOBAL_POSITION_KEY } from '../constants';
import type { CurrentConfig } from './current-config.type';

export async function current({
  PositionModel,
  streamName,
}: CurrentConfig): Promise<number | undefined> {
  const document = await PositionModel.findById(
    streamName ?? GLOBAL_POSITION_KEY,
  ).exec();

  return document?.position;
}
