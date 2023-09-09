import { Logo } from '@/layouts/logo';
import { SpecialDays } from '@/layouts/specialDays';
import { envs } from 'src/core/env';

export const Header = () => {
  return (
    <header className="w-full">
      {envs.VITE_ENVIRONMENT && envs.VITE_ENVIRONMENT !== 'production' ? (
        <div className="text-[2rem] font-[800] fixed top-1 left-4 z-[190] text-white/75">{envs.VITE_ENVIRONMENT}</div>
      ) : undefined}

      <Logo />
      <SpecialDays />
    </header>
  );
};
