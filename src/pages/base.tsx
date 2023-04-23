import type { ReactElement } from 'react';
import React from 'react';
import { HomePage } from '@/pages/home';
import { AllPage } from '@/pages/all';
import { ScreenEnum } from '@/contracts/homeScreens';
import { LikesPage } from '@/pages/likes';
import { UnlikesPage } from '@/pages/unlikes';
import { ConfigsPage } from '@/pages/configs';
import { TemplateDefault } from '@/templates/default';
import { Header } from '@/layouts/header';
import { useScreenSelected } from '@/hooks/useScreenSelected';
import { VITE_ENVIRONMENT } from '@/constants/envs';

const screens: { [screen in ScreenEnum]: ReactElement } = {
  [ScreenEnum.home]: <HomePage />,
  [ScreenEnum.all]: <AllPage />,
  [ScreenEnum.likes]: <LikesPage />,
  [ScreenEnum.unlikes]: <UnlikesPage />,
  [ScreenEnum.configs]: <ConfigsPage />,
};

export const BaseScreens = (): ReactElement => {
  const { screenSelected } = useScreenSelected();

  return (
    <TemplateDefault activeScreen={screenSelected}>
      <>
        {VITE_ENVIRONMENT === 'PREVIEW' ? (
          <div className="text-[2rem] font-[800] fixed top-1 left-4 z-[190] text-white/75">ENV {VITE_ENVIRONMENT}</div>
        ) : undefined}
        <Header />

        {screens[screenSelected]}
      </>
    </TemplateDefault>
  );
};
