import type { IMusic, IMusicTags, IMusicWithTransformation } from '@/contracts/musics';
import { useFetchAllMusics } from '@/hooks/useFetchAllMusics';
import { useReactions } from '@/hooks/useReactions';
import { ReactionEnum } from '@/services/MusicService';
import { generateRandomPositiveZeroOrNegative } from '@/utils/generators';
import { createStringToSearch } from '@/utils/normalizers';
import { parseToYoutubeContent } from '@/utils/parseToYoutubeContent';
import { useState } from 'react';

const generateRandomPlaylist = (filtered: IMusic[]): IMusic[] => {
  const dataSorted: IMusic[] = [...filtered].sort((): number => generateRandomPositiveZeroOrNegative());

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
  onlyUnlikes?: boolean;
  ignoreLikes?: boolean;
  ignoreUnlikes?: boolean;

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
  data: IMusic[] | undefined;
}

const applyOffsetAndLimit = (offset: number, limit: number, filtered: IMusic[]): IMusic[] => {
  return filtered.slice(offset, limit);
};

const applyTextFilter = (filtered: IMusic[], textSearch: string): IMusic[] => {
  if (textSearch === '') {
    return filtered;
  }
  const stringSearchNormalized: string = createStringToSearch(textSearch);
  return filtered.filter((item: IMusic) => item.searchStringNormalized.includes(stringSearchNormalized));
};

const filterByNumber = (key: keyof IMusic, based: IHasApplyStartAndEnd, filtered: IMusic[]): IMusic[] => {
  if (!based.apply) {
    return filtered;
  }
  return filtered.filter(({ [key]: count }: IMusic) => {
    if (count === undefined) {
      return false;
    }
    return count >= based.start && count <= based.end;
  });
};

const filterByTotalTag = (key: keyof IMusicTags, based: IHasApplyStartAndEnd, filtered: IMusic[]): IMusic[] => {
  if (!based.apply) {
    return filtered;
  }
  return filtered.filter(({ [key]: count }: IMusic) => {
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
  onlyUnlikes = false,
  ignoreLikes = false,
  ignoreUnlikes = false,
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
  const [filter, setFilter] = useState<IMusic[]>([]);

  const applyFilters = (): void => {
    if (data === undefined) {
      return;
    }

    let filtered: IMusic[] = [...data];

    if (random) {
      filtered = generateRandomPlaylist(filtered);
    }

    if (onlyLikes) {
      filtered = filtered.filter((item: IMusic) => reactions?.[item.id]?.reaction === ReactionEnum.like);
    }

    if (ignoreLikes) {
      filtered = filtered.filter((item: IMusic) => reactions?.[item.id]?.reaction !== ReactionEnum.like);
    }

    if (onlyUnlikes) {
      filtered = filtered.filter((item: IMusic) => reactions?.[item.id]?.reaction === ReactionEnum.unlike);
    }

    if (ignoreUnlikes) {
      filtered = filtered.filter((item: IMusic) => reactions?.[item.id]?.reaction !== ReactionEnum.unlike);
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
