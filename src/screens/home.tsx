import { useEffect } from 'react';
import { useMusicApplyFilters } from '@/hooks/useMusicApplyFilters';
import { GeneratePlaylist } from '@/widgets/generatePlaylists';
import { Cards } from '@/widgets/cards';
import { FloatingActionButtons } from '@/features/FloatingActionButtons';

const LIMIT_ITEMS = 25;

export const HomePage = () => {
  const { filtered, applyFilters, data } = useMusicApplyFilters({
    random: true,
    limit: LIMIT_ITEMS,
    ignoreLikes: false,
    ignoreUnLikes: false,
  });

  useEffect(() => {
    applyFilters();
  }, [data?.length]);

  return (
    <div>
      <Cards cards={filtered} />

      <section className="w-full flex justify-center items-center mt-16">
        <GeneratePlaylist generateRandomPlaylist={applyFilters} />
      </section>

      <FloatingActionButtons generateRandomPlaylist={applyFilters} />
    </div>
  );
};
