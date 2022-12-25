import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface INavbarItemProps {
  text: string;
  isActive: boolean;
  href: string;
}

export const NavbarItem = ({ text, href, isActive }: INavbarItemProps): ReactElement => {
  const styleOnActive: string = isActive ? 'border-red text-red' : 'border-transparent text-white';

  return (
    <Link
      to={href}
      className={`border-b-[3px] bg-transparent decoration-none p-[20px] pb-[5px] mb-[15px] cursor-pointer text-[0.9rem] transition-all duration-150 hover:scale-110 ${styleOnActive}`}>
      {text}
    </Link>
  );
};
