import { useEffect } from 'react';
import { useMusicApplyFilters } from '@/hooks/useMusicApplyFilters';
import { Cards } from '@/widgets/cards';
import { FloatingActionButtons } from '@/features/FloatingActionButtons';

export const LikesPage = () => {
  const { filtered, applyFilters, data } = useMusicApplyFilters({
    random: true,
    onlyLikes: true,
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
