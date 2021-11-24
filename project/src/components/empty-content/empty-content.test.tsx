import {render, screen} from '@testing-library/react';
import EmptyContent from './empty-content';
import {City} from '../../const';

describe('Component: EmptyContentArea', () => {
  it('should render correctly', () => {
    const currentCity = City.Paris;

    render(<EmptyContent currentCity={currentCity}/>);

    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
    expect(screen.getByText(`We could not find any property available at the moment in ${currentCity}`)).toBeInTheDocument();
  });
});
