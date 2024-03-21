import { ScreenEnum } from '@/contracts/homeScreens';
import { useCurrentScreen } from '@/hooks/useCurrentScreen';
import { LogService } from '@/services/log/LogService';
import { ReactNode } from 'react';
import { tailwindMerge } from '@/facades/tailwindMerge';

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

  const styleOnActive = isActive ? 'border-red-soft text-red-soft' : 'border-transparent text-white-ultra-light';

  return (
    <button
      type="button"
      onClick={handleClickNavItem}
      className={tailwindMerge(
        'border-b-4 bg-transparent decoration-none p-5 pb-1 mb-4 cursor-pointer transition-all duration-150 hover:scale-110 select-none font-bold flex items-center justify-center',
        styleOnActive,
      )}
      aria-label={`Navigate to ${text}`}>
      <span className="md:hidden">{icon}</span>
      <span className="ml-2 hidden md:block text-base">{text}</span>
    </button>
  );
};
