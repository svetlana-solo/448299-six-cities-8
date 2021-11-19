import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {City} from '../../const';

export const getCurrentCity = (state: State) : City => state[NameSpace.Main].currentCity;

export const getCurrentSortOption = (state: State) : string => state[NameSpace.Main].currentSortOption;
