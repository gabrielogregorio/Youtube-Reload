import { ScreenEnum } from '@/contracts/homeScreens';
import { Logo } from '@/layouts/logo';
import { Navbar } from '@/layouts/navbar';
import { ReactElement } from 'react';

type HeaderProps = {
  updateScreen: (index: ScreenEnum) => void;
  activeScreen: ScreenEnum;
};

export const Header = ({ updateScreen, activeScreen }: HeaderProps): ReactElement => {
  return (
    <header className="w-full">
      <Logo />
      <Navbar updateScreen={updateScreen} activeScreen={activeScreen} />
    </header>
  );
};
