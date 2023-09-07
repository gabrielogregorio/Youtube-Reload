import { ScreenEnum } from '@/contracts/homeScreens';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { MockProviders } from '@/utils/mockProviders';
import { Navbar } from '.';

const mockNavbar: { index: number; screen: ScreenEnum; text: string }[] = [
  {
    index: 1,
    screen: ScreenEnum.home,
    text: 'Home',
  },
  {
    index: 2,
    screen: ScreenEnum.likes,
    text: 'Likes',
  },
  {
    index: 3,
    screen: ScreenEnum.unlikes,
    text: 'Unlikes',
  },
  {
    index: 4,
    screen: ScreenEnum.all,
    text: 'All',
  },
  {
    index: 5,
    screen: ScreenEnum.configs,
    text: 'Configs',
  },
];

describe('<Navbar />', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render navbar', () => {
    render(
      <MockProviders>
        <Navbar activeScreen={ScreenEnum.home} />
      </MockProviders>,
    );
    expect(screen.getAllByRole('button')).toHaveLength(mockNavbar.length);
  });

  it('should render button texts', () => {
    render(
      <MockProviders>
        <Navbar activeScreen={ScreenEnum.home} />
      </MockProviders>,
    );
    expect(screen.getByRole('button', { name: mockNavbar[0].text })).toBeDefined();
    expect(screen.getByRole('button', { name: mockNavbar[1].text })).toBeDefined();
    expect(screen.getByRole('button', { name: mockNavbar[2].text })).toBeDefined();
    expect(screen.getByRole('button', { name: mockNavbar[3].text })).toBeDefined();
    expect(screen.getByRole('button', { name: mockNavbar[4].text })).toBeDefined();
  });
});
