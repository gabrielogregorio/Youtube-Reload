import type { ReactElement } from 'react';
import React from 'react';
import { AllPage } from '@/screens/all';
import { ScreenEnum } from '@/contracts/homeScreens';
import { Header } from '@/layouts/header';
import { useScreenSelected } from '@/hooks/useScreenSelected';
import { useAuth } from '@/hooks/useAuth';
import { ConfigsPage } from '@/screens/configs';
import { UnLikesPage } from '@/screens/unlikes';
import { LikesPage } from '@/screens/likes';
import { HomePage } from '@/screens/home';
import { MainLayout } from '@/layouts/index';

const screens: { [screen in ScreenEnum]: ReactElement } = {
  [ScreenEnum.home]: <HomePage />,
  [ScreenEnum.all]: <AllPage />,
  [ScreenEnum.likes]: <LikesPage />,
  [ScreenEnum.unLikes]: <UnLikesPage />,
  [ScreenEnum.configs]: <ConfigsPage />,
};

export const MainContainer = () => {
  const { screenSelected } = useScreenSelected();

  useAuth(); // use configure auth

  const currentScreen = screens[screenSelected];

  return (
    <MainLayout>
      <>
        <Header />

        {currentScreen}
      </>
    </MainLayout>
  );
};
