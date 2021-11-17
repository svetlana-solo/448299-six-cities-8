import {DataOffers} from '../../types/state';
import {createReducer} from '@reduxjs/toolkit';
import {setOffers, setFavoriteOffers, updateFavoriteOffers, updateOffers} from '../action';

const initialState : DataOffers = {
  offers: [],
  favoriteOffers: [],
  isDataLoaded: false,
};

export const dataOffers = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state,action) => {
      state.offers = action.payload.offers;
      state.isDataLoaded = true;
    })
    .addCase(updateOffers, (state,action) => {
      state.offers.forEach((offer) => {
        if(offer.id === action.payload.offer.id){
          offer.isFavorite = action.payload.offer.isFavorite;
        }
      });
    })
    .addCase(setFavoriteOffers,(state,action) => {
      state.favoriteOffers = action.payload.offers;
    })
    .addCase(updateFavoriteOffers, (state, action) => {
      state.favoriteOffers = state.favoriteOffers.filter((offer) => offer.id !== action.payload.offer.id);
    });
});
