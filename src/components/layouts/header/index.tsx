import type { ScreenEnum } from '@/contracts/homeScreens';
import { Logo } from '@/layouts/logo';
import { Navbar } from '@/layouts/navbar';
import type { ReactElement } from 'react';

interface IHeaderProps {
  updateScreen: (index: ScreenEnum) => void;
  activeScreen: ScreenEnum;
}

export const Header = ({ updateScreen, activeScreen }: Readonly<IHeaderProps>): ReactElement => {
  return (
    <header className="w-full">
      <Logo />
      <Navbar updateScreen={updateScreen} activeScreen={activeScreen} />
    </header>
  );
};
