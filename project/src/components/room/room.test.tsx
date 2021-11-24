import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import Room from './room';
import { offers, offerWithFavoriteStatus, reviews } from '../../utils/mocks';
import { AuthorizationStatus } from '../../const';
import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';

const history = createMemoryHistory();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
}));

describe('Component: Room', () => {
  const onFakeUnauthorized = jest.fn();
  const onFakeError = jest.fn();
  const api = createAPI(onFakeUnauthorized(), onFakeError());
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  const store = mockStore({
    USER: { authorizationStatus: AuthorizationStatus.Auth },
    ROOM: {
      currentOffer: offerWithFavoriteStatus.id,
      nearbyOffers: offers.map(({ id }) => id),
      reviews,
    },
    DATA: {
      offers: offers,
      favoriteOffers: offers,
      isDataLoaded: true,
    },
  });

  it('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <Room />
        </Router>
      </Provider>);

    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(container.querySelector('.near-places')).toBeInTheDocument();
    expect(container.querySelector('.property__gallery-container')).toBeInTheDocument();
    expect(container.querySelector('.property__container')).toBeInTheDocument();

  });
});
