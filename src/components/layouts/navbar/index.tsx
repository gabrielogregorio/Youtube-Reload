import { ScreenEnum } from '@/contracts/homeScreens';
import { NavbarItem } from '@/layouts/navbar/navbarItem';
import type { ReactElement } from 'react';

interface INavbarProps {
  updateScreen: (index: ScreenEnum) => void;
  activeScreen: ScreenEnum;
}

export const Navbar = ({ updateScreen, activeScreen }: Readonly<INavbarProps>): ReactElement => {
  return (
    <nav className="w-full flex items-center justify-center">
      <NavbarItem
        isActive={activeScreen === ScreenEnum.home}
        onClick={(): void => updateScreen(ScreenEnum.home)}
        text="Inicio"
      />

      {/* <NavbarItem isActive={activeScreen === ScreenEnum.all} onClick={(): void => updateScreen(ScreenEnum.all)}>
        Todas
      </NavbarItem> */}

      <NavbarItem
        isActive={activeScreen === ScreenEnum.likes}
        onClick={(): void => updateScreen(ScreenEnum.likes)}
        text="Favoritos"
      />
      <NavbarItem
        isActive={activeScreen === ScreenEnum.unlikes}
        onClick={(): void => updateScreen(ScreenEnum.unlikes)}
        text="Não gostei"
      />
    </nav>
  );
};
