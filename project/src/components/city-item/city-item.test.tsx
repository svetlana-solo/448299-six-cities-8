import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import CityItem from './city-item';
import {City} from '../../const';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: CityItem', () => {
  const store = mockStore();
  const city = City.Paris;
  const fakeHandler = jest.fn();
  it('should render correctly with same currentCity', () => {
    const currentCity = City.Paris;

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <CityItem currentCity={currentCity} city={city} onCityClick={fakeHandler}/>
        </Router>
      </Provider>);

    expect(screen.getByText(city)).toBeInTheDocument();
    expect(container.querySelector('.tabs__item--active')).toBeInTheDocument();
  });

  it('should render correctly with other currentCity', () => {
    const currentCity = City.Cologne;

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <CityItem currentCity={currentCity} city={city} onCityClick={fakeHandler}/>
        </Router>
      </Provider>);

    expect(screen.getByText(city)).toBeInTheDocument();
    expect(container.querySelector('.tabs__item--active')).not.toBeInTheDocument();
  });

  it('when user click on city name the handler should be executed', () => {
    const currentCity = City.Cologne;

    render(
      <Provider store={store}>
        <Router history={history}>
          <CityItem currentCity={currentCity} city={city} onCityClick={fakeHandler}/>
        </Router>
      </Provider>);

    userEvent.click(screen.getByText(city));

    expect(fakeHandler).toBeCalled();
  });
});
