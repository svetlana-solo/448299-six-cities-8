import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import FavoritesPage from './favorites-page';
import {offers} from '../../utils/mocks';
import { AuthorizationStatus } from '../../const';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {createAPI} from '../../services/api';
import {State} from '../../types/state';

const history = createMemoryHistory();

describe('Component: FavoritesPage', () => {
  const onFakeUnauthorized = jest.fn();
  const onFakeNotFound = jest.fn();
  const api = createAPI(onFakeUnauthorized(),onFakeNotFound());
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  const store = mockStore({
    DATA: {favoriteOffers: offers},
    USER: {authorizationStatus: AuthorizationStatus.Auth},
  });

  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesPage/>
        </Router>
      </Provider>);

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
    expect(container.querySelector('.favorites__list')).toBeInTheDocument();
  });
});
