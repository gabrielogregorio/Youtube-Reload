import React, { ReactElement } from 'react';
import { AllPage } from '@/screens/all';
import { ScreenEnum } from '@/contracts/homeScreens';
import { Header } from '@/layouts/header';
import { useCurrentScreen } from '@/hooks/useCurrentScreen';
import { useAuthConfigure } from '@/hooks/useAuthConfigure';
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
  const { currentScreen } = useCurrentScreen();

  useAuthConfigure();

  return (
    <MainLayout>
      <>
        <Header />

        {screens[currentScreen]}
      </>
    </MainLayout>
  );
};
