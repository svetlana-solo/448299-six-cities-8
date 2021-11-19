import {NameSpace} from '../root-reducer';
import {Offer} from '../../types/offer';
import {State} from '../../types/state';
import {SortOption, City} from '../../const';
import {getCurrentCity, getCurrentSortOption} from '../main-page/selectors';
import {createSelector} from 'reselect';

export const getOffers = (state: State) : Offer[] => state[NameSpace.Data].offers;

export const getFavoriteOffers = (state: State) : Offer[] => state[NameSpace.Data].favoriteOffers;

export const getOffersInCurrentCity = createSelector(
  getOffers,
  getCurrentCity,
  (offers, currentCity) => offers.filter((offer) => offer.city.name === currentCity),
);

export const getFavoriteLocation = (state: State) : City[] => {
  const locations = state[NameSpace.Data].favoriteOffers.reduce((acc : City[], val) =>  acc.concat(val.city.name), []);
  return [...new Set(locations)];
};

export const getSortedOffers = createSelector(
  getCurrentSortOption,
  getOffersInCurrentCity,
  (currentSortOption, offers) => {
    switch(currentSortOption){
      case SortOption.PriceHighToLow: {
        return offers.slice().sort((offerA, offerB) => offerB.price - offerA.price);
      }
      case SortOption.PriceLowToHigh: {
        return offers.slice().sort((offerA, offerB) => offerA.price - offerB.price);
      }
      case SortOption.TopRatedFirst: {
        return offers.slice().sort((offerA, offerB) => offerB.rating - offerA.rating);
      }
      default: {
        return offers;
      }
    }
  },
);

export const getLoadedDataStatus = (state: State) : boolean => state[NameSpace.Data].isDataLoaded;
