import { ScreenEnum } from '@/contracts/homeScreens';
import { fireEvent, render, screen } from '@testing-library/react';
import { Mock, vi } from 'vitest';
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
    render(<Navbar activeScreen={ScreenEnum.home} updateScreen={(): void => {}} />);
    expect(screen.getAllByRole('button')).toHaveLength(mockNavbar.length);
  });

  it('should render button texts', () => {
    render(<Navbar activeScreen={ScreenEnum.home} updateScreen={(): void => {}} />);
    expect(screen.getByRole('button', { name: mockNavbar[0].text })).toBeDefined();
    expect(screen.getByRole('button', { name: mockNavbar[1].text })).toBeDefined();
    expect(screen.getByRole('button', { name: mockNavbar[2].text })).toBeDefined();
  });

  it.each([
    [mockNavbar[0].text, mockNavbar[0].screen],
    [mockNavbar[1].text, mockNavbar[1].screen],
    [mockNavbar[2].text, mockNavbar[2].screen],
  ])('for button %i, on click should action -> %i', (textButton: string, screenExpected: ScreenEnum) => {
    const mockUpdateFunction: Mock = vi.fn();

    render(<Navbar activeScreen={ScreenEnum.home} updateScreen={mockUpdateFunction} />);
    fireEvent.click(screen.getByRole('button', { name: textButton }) as HTMLElement);
    expect(mockUpdateFunction).toBeCalledTimes(1);
    expect(mockUpdateFunction).toBeCalledWith(screenExpected);
  });
});
