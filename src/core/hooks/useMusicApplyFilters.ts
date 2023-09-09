import { useFetchAllMusics } from '@/hooks/useFetchAllMusics';
import { useReactions } from '@/hooks/useReactions';
import {
  applyOffsetAndLimit,
  applyTextFilter,
  filterByNumber,
  filterByTotalTag,
  generateRandomPlaylist,
} from '@/hooks/utils';
import { MusicFromApiMapper } from '@/mappers/music/fromApi';
import { ReactionEnum } from '@/services/ReactionsService';
import { parseToYoutubeContent } from '@/utils/parseToYoutubeContent';
import { useState } from 'react';

const LIMIT_FILTER = 500;

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
}) => {
  const { musics } = useFetchAllMusics();
  const { reactions } = useReactions();
  const [filter, setFilter] = useState<MusicFromApiMapper[]>([]);

  const applyFilters = () => {
    if (!musics) {
      return;
    }

    let filtered = [...musics];

    if (random) {
      filtered = generateRandomPlaylist(filtered);
    }

    if (onlyLikes) {
      filtered = filtered.filter((item) => reactions?.[item.id] === ReactionEnum.like);
    }

    if (ignoreLikes) {
      filtered = filtered.filter((item) => reactions?.[item.id] !== ReactionEnum.like);
    }

    if (onlyUnLikes) {
      filtered = filtered.filter((item) => reactions?.[item.id] === ReactionEnum.unlike);
    }

    if (ignoreUnLikes) {
      filtered = filtered.filter((item) => reactions?.[item.id] !== ReactionEnum.unlike);
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
    musics,
  };
};
