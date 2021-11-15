import {ActionType, AuthorizationStatus} from '../const';
import {Offer, Review} from '../types/offer';
import {createAction} from '@reduxjs/toolkit';

export const setCity = createAction(
  ActionType.SetCity,
  (currentCity: string) => ({
    payload: {
      currentCity,
    },
  }),
);

export const setOffers = createAction(
  ActionType.SetOffers,
  (offers: Offer[]) => ({
    payload: {
      offers,
    },
  }),
);

export const setReviews = createAction(
  ActionType.SetReviews,
  (reviews: Review[]) => ({
    payload: {
      reviews,
    },
  }),
);

export const setCurrentOffer = createAction(
  ActionType.SetCurrentOffer,
  (offer: Offer) => ({
    payload: {
      offer,
    },
  }),
);

export const setNearbyOffers = createAction(
  ActionType.SetNearbyOffers,
  (offers: Offer[]) => ({
    payload: {
      offers,
    },
  }),
);

export const setCurrentSortOption = createAction(
  ActionType.SetSortOption,
  (currentSortOption: string) => ({
    payload: {
      currentSortOption,
    },
  }),
);

export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

export const requireLogout = createAction(ActionType.RequireLogout);


