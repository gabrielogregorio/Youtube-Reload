import { NavbarItem } from '@/components/navbar/navbarItem';

type NavbarProps = {
  updateScreen: (index: any) => void;
  activeScreen: number;
};

export const Navbar = ({ updateScreen, activeScreen }: NavbarProps) => {
  return (
    <nav>
      <NavbarItem isActive={activeScreen === 1} onClick={() => updateScreen(1)}>
        Inicio
      </NavbarItem>
      <NavbarItem isActive={activeScreen === 2} onClick={() => updateScreen(2)}>
        Favoritos
      </NavbarItem>
      <NavbarItem isActive={activeScreen === 3} onClick={() => updateScreen(3)}>
        Não gostei
      </NavbarItem>
    </nav>
  );
};
