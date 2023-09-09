import { Navbar } from '@/layouts/navbar';
import type { ReactElement } from 'react';
import { useCurrentScreen } from '@/hooks/useCurrentScreen';
import { Notify } from '@/layouts/Notify';
import { Profile } from '@/layouts/Profile';

interface ITemplateDefaultProps {
  children: ReactElement;
}

export const MainLayout = ({ children }: ITemplateDefaultProps) => {
  const { currentScreen } = useCurrentScreen();

  return (
    <div className="relative mt-[120px]" id="base">
      <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-end bg-dark/50 backdrop-blur-sm shadow-md h-14 ">
        <div className="ml-6 hidden md:block" />
        <div className="ml-2 w-14 h-full hidden md:block" />

        <div className="ml-2 w-14 h-full hidden md:block" />

        <Navbar activeScreen={currentScreen} />

        <Notify />

        <Profile className="mr-6" />
      </div>
      <main>{children}</main>
      <div className="h-48" />
    </div>
  );
};
