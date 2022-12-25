import type { ReactElement } from 'react';
import { useEffect } from 'react';
import { ClearPreferences } from '@/widgets/clearPreferences';
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
    <TemplateDefault>
      <>
        <Header activeScreen={ScreenEnum.unlikes} />

        <section className="w-full mb-6">
          <h2 className="max-w-[620px] w-full m-auto text-center py-[40px] px-[2%] text-base md:text-[1.2rem]">
            Gere playlist com músicas que você nunca ouviu, sem nenhum algoritmo de IA.
          </h2>

          <ClearPreferences />
        </section>

        <div className="animate-fadeIn">
          <section className="mx-auto md:max-w-[700px] lg:max-w-[1000px] w-full">
            <Cards cards={filtered} />
          </section>
        </div>

        <div className="h-16" />

        <LateralButtons generateRandomPlaylist={applyFilters} />
      </>
    </TemplateDefault>
  );
};
