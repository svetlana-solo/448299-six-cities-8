import {Main} from '../../types/state';
import {City, SortOption} from '../../const';
import {createReducer} from '@reduxjs/toolkit';
import {setCity, setCurrentSortOption} from '../action';

const initialState : Main = {
  currentCity: City.Paris,
  currentSortOption: SortOption.Popular,
};

export const mainPage = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, acton) => {
      state.currentCity = acton.payload.currentCity;
    })
    .addCase(setCurrentSortOption, (state, action) => {
      state.currentSortOption = action.payload.currentSortOption;
    });
});
