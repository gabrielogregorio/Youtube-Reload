import { Navbar } from '@/layouts/navbar';
import { ReactElement } from 'react';
import { EnvironmentName } from '@/layouts/header/EnvironmentName';
import { Notify } from 'src/features/Notify';
import { Profile } from 'src/features/Profile';

interface ITemplateDefaultProps {
  children: ReactElement;
}

export const MainLayout = ({ children }: ITemplateDefaultProps) => {
  return (
    <div className="relative mt-[120px]">
      <EnvironmentName />

      <header className="fixed top-0 left-0 z-50 w-full flex items-center justify-end bg-dark/50 backdrop-blur-sm shadow-md h-14 ">
        <div className="ml-6 hidden md:block" />
        <div className="ml-2 w-14 h-full hidden md:block" />
        <div className="ml-2 w-14 h-full hidden md:block" />

        <Navbar />

        <Notify />

        <Profile className="mr-6" />
      </header>

      <main className="pb-48">{children}</main>
    </div>
  );
};
