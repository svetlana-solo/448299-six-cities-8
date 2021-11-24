import { dataOffers } from './data-offers';
import { setFavoriteOffers, setOffers, updateFavoriteOffers, updateOffers } from '../action';
import { offers, offersWithFavoriteStatus, offerWithFavoriteStatus, offerWithoutFavoriteStatus } from '../../utils/mocks';

describe('Reducer: dataOffers', () => {
  it('without additional parameters should return initial state', () => {
    expect(dataOffers(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        offers: [],
        favoriteOffers: [],
        isDataLoaded: false,
      });
  });
  it('should update offers by load offers', () => {
    const state = {
      offers: [],
      favoriteOffers: [],
      isDataLoaded: false,
    };
    expect(dataOffers(state, setOffers(offers)))
      .toEqual({
        offers: offers,
        favoriteOffers: [],
        isDataLoaded: true,
      });
  });

  it('should update offers after change favorite status', () => {
    const state = {
      offers: offers,
      favoriteOffers: [],
      isDataLoaded: false,
    };

    expect(dataOffers(state, updateOffers(offerWithFavoriteStatus)))
      .toEqual({
        offers: offersWithFavoriteStatus,
        favoriteOffers: [],
        isDataLoaded: false,
      });
  });

  it('should update favorite offers by load favorite offers', () => {
    const state = {
      offers: [],
      favoriteOffers: [],
      isDataLoaded: false,
    };

    expect(dataOffers(state, setFavoriteOffers(offersWithFavoriteStatus)))
      .toEqual({
        offers: [],
        favoriteOffers: offersWithFavoriteStatus,
        isDataLoaded: false,
      });
  });

  it('should update favorite offers after change favorite status', () => {
    const state = {
      offers: [],
      favoriteOffers: [offerWithFavoriteStatus],
      isDataLoaded: false,
    };

    expect(dataOffers(state, updateFavoriteOffers(offerWithoutFavoriteStatus)))
      .toEqual({
        offers: [],
        favoriteOffers: [],
        isDataLoaded: false,
      });
  });
});
