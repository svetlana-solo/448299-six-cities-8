import {render} from '@testing-library/react';
import Map from './map';
import {City} from '../../const';
import {offers, offerWithFavoriteStatus} from '../../utils/mocks';

describe('Component: Map', () => {
  const currentCity = City.Amsterdam;

  it('should render correctly in main page', () => {
    const {container} = render(<Map city={currentCity} offers={offers}/>);

    expect(container.querySelector('.cities__map')).toBeInTheDocument();
    expect(container.querySelector('.property__map')).not.toBeInTheDocument();
  });

  it('should render correctly in room page', () => {
    const {container} = render(<Map city={currentCity} offers={offers} offerFromRoom={offerWithFavoriteStatus.id}/>);

    expect(container.querySelector('.cities__map')).not.toBeInTheDocument();
    expect(container.querySelector('.property__map')).toBeInTheDocument();
  });
});
