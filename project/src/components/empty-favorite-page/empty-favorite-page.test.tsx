import {render, screen} from '@testing-library/react';
import EmptyFavoritePage from './empty-favorite-page';

describe('Component: EmptyFavoritePage', () => {
  it('should render correctly', () => {
    render(<EmptyFavoritePage />);

    expect(screen.getByText('Favorites (empty)')).toBeInTheDocument();
    expect(screen.getByText('Nothing yet saved.')).toBeInTheDocument();
    expect(screen.getByText('Save properties to narrow down search or plan your future trips.')).toBeInTheDocument();

  });
});
