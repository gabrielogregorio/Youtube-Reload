import type { ScreenEnum } from '@/contracts/homeScreens';
import { useCurrentScreen } from '@/hooks/useCurrentScreen';
import { tailwindMerge } from '@/libs/tailwindMerge';
import { LogService } from '@/services/log/LogService';
import type { ReactNode } from 'react';

interface INavbarItemProps {
  text: string;
  isActive: boolean;
  nameScreen: ScreenEnum;
  icon: ReactNode;
}

export const NavbarItem = ({ text, nameScreen, isActive, icon }: INavbarItemProps) => {
  const { updateCurrentScreen } = useCurrentScreen();

  const handleClickNavItem = () => {
    LogService.addBreadcrumb({ type: 'click', level: 'info', message: `update screen to ${nameScreen}` });
    updateCurrentScreen(nameScreen);
  };

  const styleOnActive = isActive ? 'border-red-light text-red-light' : 'border-transparent text-white';

  return (
    <button
      type="button"
      onClick={handleClickNavItem}
      className={tailwindMerge(
        'border-b-[3px] bg-transparent decoration-none p-[20px] pb-[5px] mb-[15px] cursor-pointer transition-all duration-150 hover:scale-110 select-none font-bold flex items-center justify-center',
        styleOnActive,
      )}
      aria-label={`Navigate to ${text}`}>
      <span className="md:hidden">{icon}</span>
      <span className="ml-2 hidden md:block text-[0.9rem]">{text}</span>
    </button>
  );
};
