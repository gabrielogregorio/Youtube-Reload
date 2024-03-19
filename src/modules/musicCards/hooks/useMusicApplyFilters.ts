import { useState } from 'react';
import { generateRandomPlaylist, applyOffsetAndLimit } from '@/modules/musicCards/hooks/utils';
import { useFetchAllMusics } from '@/modules/musicCards/hooks/useFetchAllMusics';
import { useReactions } from '@/modules/musicCards/hooks/useReactions';
import { MusicFromApiMapper } from '@/modules/musicCards/mappers/get/fromApi';
import { ReactionEnum } from '@/modules/musicCards/services/ReactionsService';
import { parseToYoutubeContent } from '@/modules/musicCards/utils/parseToYoutubeContent';

const LIMIT_FILTER = 500;

export const useMusicApplyFilters = ({ random = false, offset = 0, limit = LIMIT_FILTER, onlyLikes = false, onlyUnLikes = false }) => {
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

    if (onlyUnLikes) {
      filtered = filtered.filter((item) => reactions?.[item.id] === ReactionEnum.unlike);
    }

    filtered = applyOffsetAndLimit(offset, limit, filtered);

    setFilter(filtered);
  };
  // refactor

  return {
    filtered: parseToYoutubeContent(filter),
    applyFilters,
    musics,
  };
};
