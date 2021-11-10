import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {Actions} from '../../types/action';
import {setCity} from '../../store/action';
import {City} from '../../const';
import CityItem from '../city-item/city-item';

type CitiesListProps = {
  currentCity: string;
}

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onCityChange(currentCity: string) {
    dispatch(setCity(currentCity));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & CitiesListProps;

function CitiesList ({currentCity, onCityChange}:ConnectedComponentProps): JSX.Element {

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(City).map((city) => <CityItem key={city} city={city} currentCity={currentCity} onCityClick={onCityChange} />)}
      </ul>
    </section>);
}

export default connector(CitiesList);
export {CitiesList};
