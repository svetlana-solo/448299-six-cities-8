import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import FavoriteList from './favorite-list';
import { offers } from '../../utils/mocks';
import {City} from '../../const';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: FavoriteOffersList', () => {
  const store = mockStore();
  const city = City.Brussels;
  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <FavoriteList offers={offers} city={city}/>
        </Router>
      </Provider>);

    expect(screen.getByText(city)).toBeInTheDocument();
    expect(container.querySelector('.favorites__places')).toBeInTheDocument();
  });
});
