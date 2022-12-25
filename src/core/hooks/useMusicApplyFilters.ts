/* eslint-disable no-magic-numbers */
import type { IMusic, IMusicWithTransformation } from '@/contracts/musics';
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

interface IUseMusicApplyFiltersInput {
  random?: boolean;
  offset?: number;
  limit?: number;

  onlyLikes?: boolean;
  onlyUnlikes?: boolean;
  ignoreLikes?: boolean;
  ignoreUnlikes?: boolean;

  textSearch?: string;
  period?: {
    apply: boolean;
    startYear: number;
    endYear: number;
  };
  likes?: {
    apply: boolean;
    start: number;
    end: number;
  };
  comments?: {
    apply: boolean;
    start: number;
    end: number;
  };
  views?: {
    apply: boolean;
    start: number;
    end: number;
  };

  percent?: {
    apply: boolean;
    start: number;
    end: number;
  };

  approvalComments?: {
    apply: boolean;
    start: number;
    end: number;
  };
}

interface IUseMusicApplyFiltersOutput {
  filtered: IMusicWithTransformation[];
  applyFilters: () => void;
  data: IMusic[] | undefined;
}

export const useMusicApplyFilters = ({
  random = false,
  offset = 0,
  limit = 500,
  onlyLikes = false,
  onlyUnlikes = false,
  ignoreLikes = false,
  ignoreUnlikes = false,
  textSearch = '',
  period = {
    apply: false,
    startYear: 0,
    endYear: 0,
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

    let filtered: IMusic[] = data;

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

    if (period.apply) {
      filtered = filtered.filter(({ year: yearCount }: IMusic) => {
        return yearCount >= period.startYear && yearCount <= period.endYear;
      });
    }

    if (likes.apply) {
      filtered = filtered.filter(({ likes: likesCounts }: IMusic) => {
        return likesCounts >= likes.start && likesCounts <= likes.end;
      });
    }

    if (comments.apply) {
      filtered = filtered.filter(({ comments: commentsCounts }: IMusic) => {
        return commentsCounts >= comments.start && commentsCounts <= comments.end;
      });
    }

    if (views.apply) {
      filtered = filtered.filter(({ views: ViewsComment }: IMusic) => {
        return ViewsComment >= views.start && ViewsComment <= views.end;
      });
    }

    if (percent.apply) {
      filtered = filtered.filter(({ approval: PercentItems }: IMusic) => {
        return PercentItems >= percent.start && PercentItems <= percent.end;
      });
    }

    if (approvalComments.apply) {
      filtered = filtered.filter(({ approvalComments: ApprovalComments }: IMusic) => {
        return ApprovalComments >= approvalComments.start && ApprovalComments <= approvalComments.end;
      });
    }

    if (textSearch) {
      const stringSearchNormalized: string = createStringToSearch(textSearch);
      filtered = filtered.filter((item: IMusic) => item.searchStringNormalized.includes(stringSearchNormalized));
    }

    filtered = filtered.slice(offset, limit);

    setFilter(filtered);
  };

  return {
    filtered: parseToYoutubeContent(filter),
    applyFilters,
    data,
  };
};
