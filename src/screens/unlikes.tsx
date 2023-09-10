import { useEffect } from 'react';
import { useMusicApplyFilters } from '@/hooks/useMusicApplyFilters';
import { Cards } from '@/widgets/cards';
import { FloatingActionButtons } from '@/features/FloatingActionButtons';

export const UnLikesPage = () => {
  const { filtered, applyFilters, musics } = useMusicApplyFilters({
    random: true,
    onlyUnLikes: true,
  });

  useEffect(() => {
    applyFilters();
  }, [musics?.length]);

  return (
    <div>
      <Cards cards={filtered} />

      <FloatingActionButtons generateRandomPlaylist={applyFilters} />
    </div>
  );
};
