import { render, screen } from '@testing-library/react';
import { Logo } from '.';

describe('<Logo />', () => {
  it('should render text logo', () => {
    render(<Logo />);

    expect(screen.getByRole('heading', { name: 'Youtube Reload2' })).toBeDefined();
  });
});
