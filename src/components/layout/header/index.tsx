import { ScreenEnum } from '@/interfaces/screens';
import { Logo } from '@/layout/logo';
import { Navbar } from '@/layout/navbar';
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
