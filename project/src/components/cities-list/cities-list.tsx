import {setCity} from '../../store/action';
import {City} from '../../const';
import CityItem from '../city-item/city-item';
import {useDispatch} from 'react-redux';

type CitiesListProps = {
  currentCity: City;
}

function CitiesList ({currentCity}: CitiesListProps): JSX.Element {
  const dispatch = useDispatch();
  const onCityChange = (city: City) => {
    dispatch(setCity(city));
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(City).map((city) => <CityItem key={city} city={city} currentCity={currentCity} onCityClick={onCityChange} />)}
      </ul>
    </section>);
}

export default CitiesList;

