import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from '../types/state';
import {setCity, setOffers, setCurrentOffer, setNearbyOffers, setReviews, setSortOption, requireAuthorization, requireLogout} from '../store/action';

export type Actions =
| ReturnType<typeof setCity>
| ReturnType<typeof setOffers>
| ReturnType<typeof setReviews>
| ReturnType<typeof setSortOption>
| ReturnType<typeof requireAuthorization>
| ReturnType<typeof requireLogout>
| ReturnType<typeof setNearbyOffers>
| ReturnType<typeof setCurrentOffer>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
