import type { ReactElement, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface INavbarItemProps {
  text: string;
  isActive: boolean;
  href: string;
  icon: ReactNode;
}

export const NavbarItem = ({ text, href, isActive, icon }: INavbarItemProps): ReactElement => {
  const styleOnActive: string = isActive ? 'border-red-light text-red-light' : 'border-transparent text-white';

  return (
    <Link
      to={href}
      className={`border-b-[3px] bg-transparent decoration-none p-[20px] pb-[5px] mb-[15px] cursor-pointer transition-all duration-150 hover:scale-110 ${styleOnActive} select-none font-bold flex items-center justify-center`}>
      <span className="md:hidden">{icon}</span>
      <span className="ml-2 hidden md:block text-[0.9rem]">{text}</span>
    </Link>
  );
};
