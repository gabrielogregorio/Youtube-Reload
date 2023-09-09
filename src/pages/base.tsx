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
import { useAuth } from '@/hooks/useAuth';
import { envs } from '../core/env';

const screens: { [screen in ScreenEnum]: ReactElement } = {
  [ScreenEnum.home]: <HomePage />,
  [ScreenEnum.all]: <AllPage />,
  [ScreenEnum.likes]: <LikesPage />,
  [ScreenEnum.unlikes]: <UnlikesPage />,
  [ScreenEnum.configs]: <ConfigsPage />,
};

export const BaseScreens = (): ReactElement => {
  const { screenSelected } = useScreenSelected();
  useAuth();

  return (
    <TemplateDefault activeScreen={screenSelected}>
      <>
        {envs.VITE_ENVIRONMENT && envs.VITE_ENVIRONMENT !== 'production' ? (
          <div className="text-[2rem] font-[800] fixed top-1 left-4 z-[190] text-white/75">{envs.VITE_ENVIRONMENT}</div>
        ) : undefined}
        <Header />

        {screens[screenSelected]}
      </>
    </TemplateDefault>
  );
};
