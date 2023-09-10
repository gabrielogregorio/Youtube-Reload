import { generateRandomPositiveZeroOrNegative } from '@/utils/generators';
import { createStringToSearch } from '@/utils/normalizers';
import { MusicFromApiMapper } from '@/modules/musicCards/mappers/get/fromApi';
import { IHasApplyStartAndEnd, keysItems } from './types';

export const filterByTotalTag = (key: keysItems, based: IHasApplyStartAndEnd, filtered: MusicFromApiMapper[]) => {
  if (!based.apply) {
    return filtered;
  }

  return filtered.filter(({ [key]: count }: MusicFromApiMapper) => {
    if (!count.total) {
      return false;
    }
    return count.total >= based.start && count.total <= based.end;
  });
};

export const filterByNumber = (
  key: keyof MusicFromApiMapper,
  based: IHasApplyStartAndEnd,
  filtered: MusicFromApiMapper[],
): MusicFromApiMapper[] => {
  if (!based.apply) {
    return filtered;
  }
  return filtered.filter(({ [key]: count }: MusicFromApiMapper) => {
    if (count === undefined) {
      return false;
    }
    return count >= based.start && count <= based.end;
  });
};

export const applyTextFilter = (filtered: MusicFromApiMapper[], textSearch: string) => {
  if (textSearch === '') {
    return filtered;
  }
  const stringSearchNormalized = createStringToSearch(textSearch);
  return filtered.filter((item) => item.searchStringNormalized.includes(stringSearchNormalized));
};

export const applyOffsetAndLimit = (offset: number, limit: number, filtered: MusicFromApiMapper[]) => {
  return filtered.slice(offset, limit);
};

export const generateRandomPlaylist = (filtered: MusicFromApiMapper[]) => {
  return [...filtered].sort(() => generateRandomPositiveZeroOrNegative());
};
