import {Room} from '../../types/state';
import {createReducer} from '@reduxjs/toolkit';
import {setCurrentOffer, setNearbyOffers, setReviews} from '../action';

const initialState: Room = {
  currentOffer: null,
  nearbyOffers: [],
  reviews: [],
};

export const roomPage = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentOffer, (state, action) => {
      state.currentOffer = action.payload.offer.id;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload.offers.map(({id}) => id);
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload.reviews;
    });
});

