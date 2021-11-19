import {combineReducers} from 'redux';
import {dataOffers} from './data-offers/data-offers';
import {mainPage} from './main-page/main-page';
import {roomPage} from './room-page/room-page';
import {userStatus} from './user-status/user-status';

export enum NameSpace {
  Data = 'DATA',
  Main = 'MAIN',
  Room = 'ROOM',
  User = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataOffers,
  [NameSpace.Main]: mainPage,
  [NameSpace.Room]: roomPage,
  [NameSpace.User]: userStatus,
});

export type RootState = ReturnType<typeof rootReducer>;
