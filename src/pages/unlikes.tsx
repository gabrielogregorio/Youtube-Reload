import type { ReactElement } from 'react';
import { useEffect } from 'react';
import { ScreenEnum } from '@/contracts/homeScreens';
import { TemplateDefault } from '@/templates/default';
import { Header } from '@/layouts/header';
import { LateralButtons } from '@/widgets/lateralButtons';
import { useMusicApplyFilters } from '@/hooks/useMusicApplyFilters';
import { Cards } from '@/widgets/cards';

export const UnlikesPage = (): ReactElement => {
  const { filtered, applyFilters, data } = useMusicApplyFilters({
    random: true,
    onlyUnlikes: true,
  });

  useEffect(() => {
    applyFilters();
  }, [data?.length]);

  return (
    <TemplateDefault activeScreen={ScreenEnum.unlikes}>
      <>
        <Header />

        <Cards cards={filtered} />

        <LateralButtons generateRandomPlaylist={applyFilters} />
      </>
    </TemplateDefault>
  );
};