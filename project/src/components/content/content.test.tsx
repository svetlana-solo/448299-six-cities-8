import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import Content from './content';
import {City, SortOption} from '../../const';
import {offers} from '../../utils/mocks';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: Content', () => {
  const store = mockStore({
    DATA: {offers: offers},
    MAIN: {currentSortOption: SortOption.Popular},
  });
  const currentCity = City.Paris;

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Content currentCity={currentCity}/>
        </Router>
      </Provider>);

    expect(screen.getByText(/places to stay in/i)).toBeInTheDocument();
    expect(screen.getByText('Places')).toBeInTheDocument();

  });
});
