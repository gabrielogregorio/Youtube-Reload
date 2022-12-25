import type { ScreenEnum } from '@/contracts/homeScreens';
import { Logo } from '@/layouts/logo';
import { Navbar } from '@/layouts/navbar';
import type { ReactElement } from 'react';

interface IHeaderProps {
  activeScreen: ScreenEnum;
}

export const Header = ({ activeScreen }: IHeaderProps): ReactElement => {
  return (
    <header className="w-full">
      <Logo />
      <Navbar activeScreen={activeScreen} />
    </header>
  );
};
