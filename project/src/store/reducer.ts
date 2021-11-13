import {State} from '../types/state';
import {Actions} from '../types/action';
import {City, SortOption, ActionType, AuthorizationStatus} from '../const';

const initialState : State = {
  currentCity: City.Paris,
  offers: [],
  currentOffer: null,
  nearbyOffers: [],
  reviews: [],
  currentSortOption: SortOption.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

export const reducer = (state : State = initialState, action: Actions): State => {
  switch(action.type){
    case ActionType.SetCity: {
      return {...state, currentCity: action.payload.currentCity};
    }
    case ActionType.SetOffers: {
      return {...state, offers: action.payload.offers};
    }
    case ActionType.SetSortOption: {
      return {...state, currentSortOption: action.payload.currentSortOption};
    }
    case ActionType.SetCurrentOffer: {
      return {...state, currentOffer: action.payload.offer.id};
    }
    case ActionType.SetNearbyOffers: {
      return {...state, nearbyOffers: action.payload.offers.map(({id}) => id)};
    }
    case ActionType.SetReviews: {
      return {...state, reviews: action.payload.reviews};
    }
    case ActionType.RequireAuthorization:{
      return {
        ...state,
        authorizationStatus: action.payload,
        isDataLoaded: true,
      };
    }
    case ActionType.RequireLogout: {
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    }
    default: {
      return state;
    }
  }
};

