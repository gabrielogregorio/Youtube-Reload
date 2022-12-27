import { Logo } from '@/layouts/logo';
import { SpecialDays } from '@/layouts/specialDays';
import type { ReactElement } from 'react';

export const Header = (): ReactElement => {
  return (
    <header className="w-full">
      <Logo />
      <SpecialDays />
    </header>
  );
};
