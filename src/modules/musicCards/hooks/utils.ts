import { MusicFromApiMapper } from '@/modules/musicCards/mappers/get/fromApi';
import { shuffleArray } from '@/utils/shuffleArray';

export const applyOffsetAndLimit = (offset: number, limit: number, filtered: MusicFromApiMapper[]): MusicFromApiMapper[] => {
  return filtered.slice(offset, limit);
};

export const generateRandomPlaylist = (filtered: MusicFromApiMapper[]): MusicFromApiMapper[] => {
  return shuffleArray(filtered);
};
