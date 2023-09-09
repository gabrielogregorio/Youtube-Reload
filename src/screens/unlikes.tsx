import { useEffect } from 'react';
import { LateralButtons } from '@/widgets/lateralButtons';
import { useMusicApplyFilters } from '@/hooks/useMusicApplyFilters';
import { Cards } from '@/widgets/cards';

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

      <LateralButtons generateRandomPlaylist={applyFilters} />
    </div>
  );
};
