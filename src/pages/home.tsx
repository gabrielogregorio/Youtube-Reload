import type { ReactElement } from 'react';
import { useEffect } from 'react';
import { GeneratePlaylist } from '@/widgets/generatePlaylists';
import { ScreenEnum } from '@/contracts/homeScreens';
import { TemplateDefault } from '@/templates/default';
import { Header } from '@/layouts/header';
import { LateralButtons } from '@/widgets/lateralButtons';
import { useMusicApplyFilters } from '@/hooks/useMusicApplyFilters';
import { Cards } from '@/widgets/cards';
import { SubTitleAndClear } from '@/widgets/SubTitleAndClear';

const LIMIT_ITEMS: number = 16;

export const HomePage = (): ReactElement => {
  const { filtered, applyFilters, data } = useMusicApplyFilters({
    random: true,
    limit: LIMIT_ITEMS,
    ignoreLikes: true,
    ignoreUnlikes: true,
  });

  useEffect(() => {
    applyFilters();
  }, [data?.length]);

  return (
    <TemplateDefault>
      <>
        <Header activeScreen={ScreenEnum.home} />

        <SubTitleAndClear />

        <Cards cards={filtered} />

        <section className="w-full flex justify-center items-center mt-16">
          <GeneratePlaylist generateRandomPlaylist={applyFilters} />
        </section>

        <LateralButtons generateRandomPlaylist={applyFilters} />
      </>
    </TemplateDefault>
  );
};
