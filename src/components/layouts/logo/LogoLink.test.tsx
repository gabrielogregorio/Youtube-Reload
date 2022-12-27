import { render, screen } from '@testing-library/react';
import { Logo } from '.';

describe.skip('<Logo />', () => {
  it('should render text logo', () => {
    render(<Logo />);

    expect(screen.getByRole('heading', { name: 'Youtube Reload' })).toBeDefined();
  });
});
