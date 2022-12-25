import { ScreenEnum } from '@/contracts/homeScreens';
import { NavbarItem } from '@/layouts/navbar/navbarItem';
import type { ReactElement } from 'react';

interface INavbarProps {
  activeScreen: ScreenEnum;
}

export const Navbar = ({ activeScreen }: INavbarProps): ReactElement => {
  return (
    <nav className="w-full flex items-center justify-center">
      <NavbarItem isActive={activeScreen === ScreenEnum.home} href={ScreenEnum.home} text="Inicio" />

      <NavbarItem isActive={activeScreen === ScreenEnum.all} href={ScreenEnum.all} text="Todas" />

      <NavbarItem isActive={activeScreen === ScreenEnum.likes} href={ScreenEnum.likes} text="Favoritos" />

      <NavbarItem isActive={activeScreen === ScreenEnum.unlikes} href={ScreenEnum.unlikes} text="Não gostei" />
    </nav>
  );
};
