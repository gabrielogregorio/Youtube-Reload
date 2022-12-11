import { NavbarItem } from '@/layout/navbar/navbarItem';
import { ReactElement } from 'react';

type NavbarProps = {
  updateScreen: (index: any) => void;
  activeScreen: number;
};

export const Navbar = ({ updateScreen, activeScreen }: NavbarProps): ReactElement => {
  return (
    <nav className="w-full flex items-center justify-center">
      <NavbarItem isActive={activeScreen === 1} onClick={(): void => updateScreen(1)}>
        Inicio
      </NavbarItem>
      <NavbarItem isActive={activeScreen === 2} onClick={(): void => updateScreen(2)}>
        Favoritos
      </NavbarItem>
      <NavbarItem isActive={activeScreen === 3} onClick={(): void => updateScreen(3)}>
        Não gostei
      </NavbarItem>
    </nav>
  );
};
