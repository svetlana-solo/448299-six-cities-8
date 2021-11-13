import {ActionType, AuthorizationStatus} from '../const';
import {Offer, Review} from '../types/offer';

export const setCity = (currentCity:string) => ({
  type: ActionType.SetCity,
  payload: {
    currentCity,
  },
} as const);

export const setOffers = (offers: Offer[]) => ({
  type: ActionType.SetOffers,
  payload: {
    offers,
  },
} as const);

export const setReviews = (reviews: Review[]) => ({
  type: ActionType.SetReviews,
  payload: {
    reviews,
  },
} as const);


export const setCurrentOffer = (offer: Offer) => ({
  type: ActionType.SetCurrentOffer,
  payload: {
    offer,
  },
} as const);

export const setNearbyOffers = (offers: Offer[]) => ({
  type: ActionType.SetNearbyOffers,
  payload: {
    offers,
  },
} as const);

export const setSortOption = (currentSortOption: string) => ({
  type: ActionType.SetSortOption,
  payload: {
    currentSortOption,
  },
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);


