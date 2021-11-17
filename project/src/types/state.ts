import {Offer, Review} from './offer';
import {AuthorizationStatus, City} from '../const';
import {RootState} from '../store/root-reducer';

export type State = RootState;

export type DataOffers = {
  offers: Offer[],
  favoriteOffers: Offer[],
  isDataLoaded: boolean,
}

export type User = {
  authorizationStatus: AuthorizationStatus,
}

export type Main = {
  currentCity: City,
  currentSortOption: string,
}

export type Room = {
  reviews: Review[],
  currentOffer: number | null,
  nearbyOffers: number[],
}
