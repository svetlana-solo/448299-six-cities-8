import {Offer, Review} from './offer';
import {AuthorizationStatus} from '../const';
import {RootState} from '../store/root-reducer';

export type State = RootState;

export type Data = {
  offers: Offer[],
  isDataLoaded: boolean,
}

export type User = {
  authorizationStatus: AuthorizationStatus,
}

export type Main = {
  currentCity: string,
  currentSortOption: string,
}

export type Room = {
  reviews: Review[],
  currentOffer: number | null,
  nearbyOffers: number[],
}
