import {Offer, Review} from './offer';
import {AuthorizationStatus} from '../const';

export type State = {
  currentCity: string,
  offers: Offer[],
  currentOffer: Offer | null,
  nearbyOffers: Offer[],
  reviews: Review[],
  currentSortOption: string,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
}

