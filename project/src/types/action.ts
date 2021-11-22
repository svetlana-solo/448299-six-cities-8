import {ThunkAction} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from '../types/state';
import {Action} from 'redux';

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
