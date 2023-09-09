import { useEffect } from 'react';
import { useMusicApplyFilters } from '@/hooks/useMusicApplyFilters';
import { Cards } from '@/widgets/cards';
import { FloatingActionButtons } from '@/features/FloatingActionButtons';

export const UnLikesPage = () => {
  const { filtered, applyFilters, data } = useMusicApplyFilters({
    random: true,
    onlyUnLikes: true,
  });

  useEffect(() => {
    applyFilters();
  }, [data?.length]);

  return (
    <div>
      <Cards cards={filtered} />

      <FloatingActionButtons generateRandomPlaylist={applyFilters} />
    </div>
  );
};
