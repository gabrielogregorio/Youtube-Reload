import { useEffect } from 'react';
import { FloatingActionButtons } from '@/features/FloatingActionButtons';
import { useMusicApplyFilters } from '@/modules/musicCards/hooks/useMusicApplyFilters';
import { Cards } from '@/modules/musicCards/cards';

export const LikesPage = () => {
  const { filtered, applyFilters, musics } = useMusicApplyFilters({
    random: true,
    likeFilter: 'onlyLike',
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
