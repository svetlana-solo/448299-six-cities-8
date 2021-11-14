import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './store/root-reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from './services/api';
import {requireAuthorization} from './store/action';
import {AuthorizationStatus, AppRoute} from './const';
import thunk from 'redux-thunk';
import browserHistory from './browser-history';
import {ThunkAppDispatch} from './types/action';
import {fetchOffersAction, checkAuthAction} from './store/api-actions';
import {Router as  BrowserRouter} from 'react-router-dom';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
  () => browserHistory.push(AppRoute.Error),
);

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument(api)),
));

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
