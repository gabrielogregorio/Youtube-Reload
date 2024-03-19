import { MusicFromApiMapper } from '@/modules/musicCards/mappers/get/fromApi';
import { shuffleArray } from '@/utils/generators';

export const applyOffsetAndLimit = (offset: number, limit: number, filtered: MusicFromApiMapper[]) => {
  return filtered.slice(offset, limit);
};

export const generateRandomPlaylist = (filtered: MusicFromApiMapper[]) => {
  return shuffleArray(filtered);
};
