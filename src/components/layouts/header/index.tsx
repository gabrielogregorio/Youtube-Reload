import { Logo } from '@/layouts/logo';
import type { ReactElement } from 'react';

export const Header = (): ReactElement => {
  return (
    <header className="w-full">
      <Logo />
    </header>
  );
};
