import { useFetchAllMusics } from '@/hooks/useFetchAllMusics';
import { useReactions } from '@/hooks/useReactions';
import { IMusicWithTransformation, MusicFromApiMapper } from '@/mappers/music/fromApi';
import { ReactionEnum } from '@/services/ReactionsService';
import { generateRandomPositiveZeroOrNegative } from '@/utils/generators';
import { createStringToSearch } from '@/utils/normalizers';
import { parseToYoutubeContent } from '@/utils/parseToYoutubeContent';
import { useState } from 'react';

const generateRandomPlaylist = (filtered: MusicFromApiMapper[]): MusicFromApiMapper[] => {
  const dataSorted: MusicFromApiMapper[] = [...filtered].sort((): number => generateRandomPositiveZeroOrNegative());

  return dataSorted;
};

interface IHasApplyStartAndEnd {
  apply: boolean;
  start: number;
  end: number;
}

interface IUseMusicApplyFiltersInput {
  random?: boolean;
  offset?: number;
  limit?: number;

  onlyLikes?: boolean;
  onlyUnLikes?: boolean;
  ignoreLikes?: boolean;
  ignoreUnLikes?: boolean;

  textSearch?: string;
  period?: IHasApplyStartAndEnd;
  likes?: IHasApplyStartAndEnd;
  comments?: IHasApplyStartAndEnd;
  views?: IHasApplyStartAndEnd;

  percent?: IHasApplyStartAndEnd;

  approvalComments?: IHasApplyStartAndEnd;
}

interface IUseMusicApplyFiltersOutput {
  filtered: IMusicWithTransformation[];
  applyFilters: () => void;
  data: MusicFromApiMapper[] | undefined;
}

const applyOffsetAndLimit = (offset: number, limit: number, filtered: MusicFromApiMapper[]): MusicFromApiMapper[] => {
  return filtered.slice(offset, limit);
};

const applyTextFilter = (filtered: MusicFromApiMapper[], textSearch: string): MusicFromApiMapper[] => {
  if (textSearch === '') {
    return filtered;
  }
  const stringSearchNormalized: string = createStringToSearch(textSearch);
  return filtered.filter((item: MusicFromApiMapper) => item.searchStringNormalized.includes(stringSearchNormalized));
};

const filterByNumber = (
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

const filterByTotalTag = (
  key: 'views' | 'comments' | 'likes',
  based: IHasApplyStartAndEnd,
  filtered: MusicFromApiMapper[],
): MusicFromApiMapper[] => {
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

const LIMIT_FILTER: number = 500;

export const useMusicApplyFilters = ({
  random = false,
  offset = 0,
  limit = LIMIT_FILTER,
  onlyLikes = false,
  onlyUnLikes = false,
  ignoreLikes = false,
  ignoreUnLikes = false,
  textSearch = '',
  period = {
    apply: false,
    start: 0,
    end: 0,
  },
  likes = {
    apply: false,
    start: 0,
    end: 0,
  },
  comments = {
    apply: false,
    start: 0,
    end: 0,
  },
  views = {
    apply: false,
    start: 0,
    end: 0,
  },
  percent = {
    apply: false,
    start: 0,
    end: 0,
  },
  approvalComments = {
    apply: false,
    start: 0,
    end: 0,
  },
}: IUseMusicApplyFiltersInput): IUseMusicApplyFiltersOutput => {
  const { data } = useFetchAllMusics();
  const { reactions } = useReactions();
  const [filter, setFilter] = useState<MusicFromApiMapper[]>([]);

  const applyFilters = () => {
    if (data === undefined) {
      return;
    }

    let filtered = [...data];

    if (random) {
      filtered = generateRandomPlaylist(filtered);
    }

    if (onlyLikes) {
      filtered = filtered.filter((item: MusicFromApiMapper) => reactions?.[item.id]?.reaction === ReactionEnum.like);
    }

    if (ignoreLikes) {
      filtered = filtered.filter((item: MusicFromApiMapper) => reactions?.[item.id]?.reaction !== ReactionEnum.like);
    }

    if (onlyUnLikes) {
      filtered = filtered.filter((item: MusicFromApiMapper) => reactions?.[item.id]?.reaction === ReactionEnum.unlike);
    }

    if (ignoreUnLikes) {
      filtered = filtered.filter((item: MusicFromApiMapper) => reactions?.[item.id]?.reaction !== ReactionEnum.unlike);
    }

    filtered = filterByTotalTag('likes', likes, filtered);
    filtered = filterByTotalTag('comments', comments, filtered);
    filtered = filterByTotalTag('views', views, filtered);

    filtered = filterByNumber('year', period, filtered);
    filtered = filterByNumber('percentViewsLikesComments', percent, filtered);
    filtered = filterByNumber('percentLikesComments', approvalComments, filtered);

    filtered = applyTextFilter(filtered, textSearch);

    filtered = applyOffsetAndLimit(offset, limit, filtered);

    setFilter(filtered);
  };

  return {
    filtered: parseToYoutubeContent(filter),
    applyFilters,
    data,
  };
};
