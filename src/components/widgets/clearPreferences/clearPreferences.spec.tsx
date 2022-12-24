import { MusicService } from '@/services/MusicService';
import { fireEvent, render, screen } from '@testing-library/react';
import type { SpyInstance } from 'vitest';
import { vi } from 'vitest';
import { ClearPreferences } from '.';

describe('<ClearPreferences />', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render a clear preferences', () => {
    render(<ClearPreferences />);
    expect(screen.getByRole('button', { name: 'Limpar Preferências' })).toBeDefined();
  });

  it('should click in reset button and call music service', () => {
    const spy: SpyInstance = vi.spyOn(MusicService, 'clearAll');
    expect(spy.getMockName()).toEqual('clearAll');
    spy.mockImplementationOnce(() => 'access-restricted');
    expect(spy).toHaveBeenCalledTimes(0);

    render(<ClearPreferences />);
    fireEvent.click(screen.getByRole('button', { name: 'Limpar Preferências' }));

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
