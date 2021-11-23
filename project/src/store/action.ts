import {ActionType, AuthorizationStatus, City} from '../const';
import {Offer, Review} from '../types/offer';
import {createAction} from '@reduxjs/toolkit';


export const setCity = createAction(
  ActionType.SetCity,
  (currentCity: City) => ({
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

export const updateOffers = createAction(
  ActionType.UpdateOffers,
  (offer: Offer) => ({
    payload: {
      offer,
    },
  }),
);

export const setFavoriteOffers = createAction(
  ActionType.SetFavoriteOffers,
  (offers: Offer[]) => ({
    payload: {
      offers,
    },
  }),
);

export const updateFavoriteOffers = createAction(
  ActionType.UpdateFavoriteOffers,
  (offer: Offer) => ({
    payload: {
      offer,
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

export const setUserEmail = createAction(
  ActionType.SetUserEmail,
  (userEmail: string) => ({
    payload: {
      userEmail,
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


