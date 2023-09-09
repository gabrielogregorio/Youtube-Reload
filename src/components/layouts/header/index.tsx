import { DailyHighlightCarousel } from '@/features/DailyHighlightCarousel';
import { Logo } from '@/layouts/logo';

export const Header = () => {
  return (
    <header className="w-full">
      <Logo />
      <DailyHighlightCarousel />
    </header>
  );
};
