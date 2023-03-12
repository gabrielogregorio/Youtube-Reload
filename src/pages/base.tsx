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
        <Header />

        {screens[screenSelected]}
      </>
    </TemplateDefault>
  );
};
