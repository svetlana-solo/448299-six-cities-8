import {mainPage} from './main-page';
import {setCity, setCurrentSortOption} from '../action';
import {City, SortOption} from '../../const';

describe('Reducer: mainPage', () => {
  it('without additional parameters should return initial state', () => {
    expect(mainPage(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        currentCity: City.Paris,
        currentSortOption: SortOption.Popular,
      });
  });

  it('should update current city by current value', () => {
    const state = {
      currentCity: City.Paris,
      currentSortOption: SortOption.Popular,
    };
    expect(mainPage(state, setCity(City.Cologne)))
      .toEqual({
        currentCity: City.Cologne,
        currentSortOption: SortOption.Popular,
      });
  });

  it('should update current sort option by current value', () => {
    const state = {
      currentCity: City.Paris,
      currentSortOption: SortOption.Popular,
    };
    expect(mainPage(state, setCurrentSortOption(SortOption.PriceLowToHigh)))
      .toEqual({
        currentCity: City.Paris,
        currentSortOption: SortOption.PriceLowToHigh,
      });
  });
});
