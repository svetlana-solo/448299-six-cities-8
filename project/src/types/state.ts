import {Offer, Review} from './offer';
import {AuthorizationStatus} from '../const';

export type State = {
  currentCity: string,
  offers: Offer[],
  currentOffer: number | null,
  nearbyOffers: number[],
  reviews: Review[],
  currentSortOption: string,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
}

