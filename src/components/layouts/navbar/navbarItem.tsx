import { ReactElement, ReactNode } from 'react';

type NavbarItemProps = {
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
};

export const NavbarItem = ({ children, onClick, isActive }: NavbarItemProps): ReactElement => {
  const styleOnActive: string = isActive ? 'border-red' : 'border-transparent';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`border-b-[3px] bg-transparent decoration-none text-white p-[20px] pb-[5px] mb-[15px] cursor-pointer text-[0.9rem] transition-all duration-150 hover:scale-110 ${styleOnActive}`}>
      {children}
    </button>
  );
};
