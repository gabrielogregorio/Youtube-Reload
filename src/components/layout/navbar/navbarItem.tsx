import { ReactNode } from 'react';

type NavbarItemProps = {
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
};

export const NavbarItem = ({ children, onClick, isActive }: NavbarItemProps) => {
  return (
    <button onClick={onClick} className={`btn3 ${isActive ? 'nav-active' : ''}`}>
      {children}
    </button>
  );
};
