import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import userEvent from '@testing-library/user-event';
import CitiesList from './cities-list';
import {City} from '../../const';
import {setCity} from '../../store/action';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: CitiesList', () => {
  const store = mockStore();
  const currentCity = City.Paris;

  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <CitiesList currentCity={currentCity}/>
        </Router>
      </Provider>);

    expect(container.querySelector('.locations')).toBeInTheDocument();
    expect(container.querySelector('.locations__list')).toBeInTheDocument();
  });

  it('when user click on city item should dispatch setCity', () => {
    const otherCity = City.Dusseldorf;

    render(
      <Provider store={store}>
        <Router history={history}>
          <CitiesList currentCity={currentCity}/>
        </Router>
      </Provider>);

    userEvent.click(screen.getByText(otherCity));

    expect(store.getActions()).toEqual([
      setCity(otherCity),
    ]);
  });

  it('when user click on current city should not dispatch setCity', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CitiesList currentCity={currentCity}/>
        </Router>
      </Provider>);

    userEvent.click(screen.getByText(currentCity));

    expect(store.getActions()).not.toEqual([
      setCity(currentCity),
    ]);
  });
});
