import {roomPage} from './room-page';
import {setCurrentOffer, setReviews, setNearbyOffers} from '../action';
import {offers, offerWithFavoriteStatus, reviews} from '../../utils/mocks';

describe('Reducer: roomPage', () => {
  it('without additional parameters should return initial state', () => {
    expect(roomPage(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        currentOffer: null,
        nearbyOffers: [],
        reviews: [],
      });
  });

  it('should update current offer by load offer', () => {
    const state = {
      currentOffer: null,
      nearbyOffers: [],
      reviews: [],
    };
    expect(roomPage(state, setCurrentOffer(offerWithFavoriteStatus)))
      .toEqual({
        currentOffer: offerWithFavoriteStatus.id,
        nearbyOffers: [],
        reviews: [],
      });
  });

  it('should update reviews by load offer reviews', () => {
    const state = {
      currentOffer: null,
      nearbyOffers: [],
      reviews: [],
    };
    expect(roomPage(state, setReviews(reviews)))
      .toEqual({
        currentOffer: null,
        nearbyOffers: [],
        reviews,
      });
  });

  it('should update nearby offers by load nearby offers', () => {
    const state = {
      currentOffer: null,
      nearbyOffers: [],
      reviews: [],
    };
    expect(roomPage(state, setNearbyOffers(offers)))
      .toEqual({
        currentOffer: null,
        nearbyOffers: offers.map(({id}) => id),
        reviews: [],
      });
  });
});
