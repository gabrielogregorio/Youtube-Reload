import { ScreenEnum } from '@/interfaces/screens';
import { NavbarItem } from '@/layout/navbar/navbarItem';
import { ReactElement } from 'react';

type NavbarProps = {
  updateScreen: (index: ScreenEnum) => void;
  activeScreen: ScreenEnum;
};

export const Navbar = ({ updateScreen, activeScreen }: NavbarProps): ReactElement => {
  return (
    <nav className="w-full flex items-center justify-center">
      <NavbarItem isActive={activeScreen === ScreenEnum.home} onClick={(): void => updateScreen(ScreenEnum.home)}>
        Inicio
      </NavbarItem>
      <NavbarItem isActive={activeScreen === ScreenEnum.likes} onClick={(): void => updateScreen(ScreenEnum.likes)}>
        Favoritos
      </NavbarItem>
      <NavbarItem isActive={activeScreen === ScreenEnum.unlikes} onClick={(): void => updateScreen(ScreenEnum.unlikes)}>
        Não gostei
      </NavbarItem>
    </nav>
  );
};
