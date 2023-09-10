import { ScreenEnum } from '@/contracts/homeScreens';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { MockProviders } from '@/utils/mockProviders';
import * as useCurrentScreen from '@/hooks/useCurrentScreen';
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
    screen: ScreenEnum.unLikes,
    text: 'UnLikes',
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

const spyUseAuth = vi.spyOn(useCurrentScreen, 'useCurrentScreen');

spyUseAuth.mockImplementation(() => {
  return {
    currentScreen: ScreenEnum.home,
    updateCurrentScreen: () => {},
  };
});

describe('<Navbar />', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render navbar', () => {
    render(
      <MockProviders>
        <Navbar />
      </MockProviders>,
    );
    expect(screen.getAllByRole('button')).toHaveLength(mockNavbar.length);
  });

  it('should render button texts', () => {
    const { container } = render(
      <MockProviders>
        <Navbar />
      </MockProviders>,
    );

    expect(container).toMatchSnapshot();
  });
});
