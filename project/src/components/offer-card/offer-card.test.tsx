import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import OfferCard from './offer-card';
import {offerWithFavoriteStatus} from '../../utils/mocks';
import {AuthorizationStatus} from '../../const';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: OfferCard', () => {
  const store = mockStore({
    USER: {authorizationStatus: AuthorizationStatus.Auth},
  });
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <OfferCard offer={offerWithFavoriteStatus}/>
        </Router>
      </Provider>);

    expect(screen.getByText(/To bookmarks/i)).toBeInTheDocument();
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
    expect(screen.getByText(offerWithFavoriteStatus.title)).toBeInTheDocument();
  });
});
