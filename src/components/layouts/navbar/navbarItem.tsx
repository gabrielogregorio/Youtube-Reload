import type { ScreenEnum } from '@/contracts/homeScreens';
import { useScreenSelected } from '@/hooks/useScreenSelected';
import type { ReactElement, ReactNode } from 'react';

interface INavbarItemProps {
  text: string;
  isActive: boolean;
  nameScreen: ScreenEnum;
  icon: ReactNode;
}

export const NavbarItem = ({ text, nameScreen, isActive, icon }: INavbarItemProps): ReactElement => {
  const styleOnActive: string = isActive ? 'border-red-light text-red-light' : 'border-transparent text-white';
  const { updateScreen } = useScreenSelected();

  return (
    <button
      type="button"
      onClick={(): void => updateScreen(nameScreen)}
      className={`border-b-[3px] bg-transparent decoration-none p-[20px] pb-[5px] mb-[15px] cursor-pointer transition-all duration-150 hover:scale-110 ${styleOnActive} select-none font-bold flex items-center justify-center`}>
      <span className="md:hidden">{icon}</span>
      <span className="ml-2 hidden md:block text-[0.9rem]">{text}</span>
    </button>
  );
};
