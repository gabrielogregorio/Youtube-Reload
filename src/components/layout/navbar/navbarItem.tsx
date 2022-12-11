import { ReactElement, ReactNode } from 'react';

type NavbarItemProps = {
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
};

export const NavbarItem = ({ children, onClick, isActive }: NavbarItemProps): ReactElement => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border-b-[3px] bg-transparent decoration-none text-dark p-[20px] pb-[5px] mb-[15px] cursor-pointer text-[0.9rem]
        ${isActive ? 'border-red' : 'border-transparent'}`}>
      {children}
    </button>
  );
};
