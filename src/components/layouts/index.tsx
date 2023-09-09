import { useGetProfile } from '@/hooks/useGetProfile';
import { Navbar } from '@/layouts/navbar';
import type { ReactElement } from 'react';
import { LogService } from '@/services/log/LogService';
import { useCurrentScreen } from '@/hooks/useCurrentScreen';
import { Notify } from '@/layouts/Notify';

interface ITemplateDefaultProps {
  children: ReactElement;
}

export const MainLayout = ({ children }: ITemplateDefaultProps) => {
  const { emoji, handleUpdateEmoji } = useGetProfile();
  const { currentScreen } = useCurrentScreen();

  return (
    <div className="relative mt-[120px]" id="base">
      <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-end bg-dark/50 backdrop-blur-sm shadow-md h-14 ">
        <div className="ml-6 hidden md:block" />
        <div className="ml-2 w-14 h-full hidden md:block" />

        <div className="ml-2 w-14 h-full hidden md:block" />

        <Navbar activeScreen={currentScreen} />

        <Notify />

        <div className="ml-2 w-14 h-full flex items-center justify-center">
          <button
            title="Trocar de emoji"
            aria-label="Trocar foto de perfil"
            type="button"
            onClick={() => {
              LogService.addBreadcrumb({ type: 'click', level: 'info', message: 'update emoji' });
              handleUpdateEmoji();
            }}
            className="flex items-center justify-center h-6 w-6 hover:h-8 hover:w-8 rounded-full text-xl cursor-pointer select-none hover:bg-dark-light transition-all duration-150">
            {emoji}
          </button>
        </div>
        <div className="mr-6" />
      </div>
      <main className="">{children}</main>
      <div className="h-48" />
    </div>
  );
};
