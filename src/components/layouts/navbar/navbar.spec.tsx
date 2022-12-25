import { ScreenEnum } from '@/contracts/homeScreens';
import { render, screen } from '@testing-library/react';

import { vi } from 'vitest';
import { Navbar } from '.';

const mockNavbar: { index: number; screen: ScreenEnum; text: string }[] = [
  {
    index: 1,
    screen: ScreenEnum.home,
    text: 'Inicio',
  },
  {
    index: 2,
    screen: ScreenEnum.likes,
    text: 'Favoritos',
  },
  {
    index: 3,
    screen: ScreenEnum.unlikes,
    text: 'Não gostei',
  },
];

describe('<Navbar />', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render navbar', () => {
    render(<Navbar activeScreen={ScreenEnum.home} />);
    expect(screen.getAllByRole('button')).toHaveLength(mockNavbar.length);
  });

  it('should render button texts', () => {
    render(<Navbar activeScreen={ScreenEnum.home} />);
    expect(screen.getByRole('button', { name: mockNavbar[0].text })).toBeDefined();
    expect(screen.getByRole('button', { name: mockNavbar[1].text })).toBeDefined();
    expect(screen.getByRole('button', { name: mockNavbar[2].text })).toBeDefined();
  });
});
