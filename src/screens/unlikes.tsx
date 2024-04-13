import { useEffect } from 'react';
import { FloatingActionButtons } from '@/features/FloatingActionButtons';
import { Cards } from '@/modules/musicCards/cards';
import { useMusicApplyFilters } from '@/modules/musicCards/hooks/useMusicApplyFilters';

export const UnLikesPage = () => {
  const { filtered, applyFilters, musics } = useMusicApplyFilters({
    random: true,
    likeFilter: 'onlyUnlike',
  });

  useEffect(() => {
    applyFilters();
  }, [musics?.length]);

  return (
    <div>
      <main>
        <Cards cards={filtered} />
      </main>

      <FloatingActionButtons generateRandomPlaylist={applyFilters} />
    </div>
  );
};
