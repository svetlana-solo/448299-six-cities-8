import Header from '../header/header';
import CitiesList from '../cities-list/cities-list';
import Content from '../content/content';
import EmptyContent from '../empty-content/empty-content';
import {getCurrentCity} from '../../store/main-page/selectors';
import {getOffersInCurrentCity} from '../../store/data-offers/selectors';
import {useSelector} from 'react-redux';


function MainPage(): JSX.Element {
  const currentCity = useSelector(getCurrentCity);
  const offersInCurrentCity = useSelector(getOffersInCurrentCity);

  return (
    <div className ="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList currentCity={currentCity}/>
        </div>
        <div className="cities">
          {
            offersInCurrentCity?.length > 0
              ? <Content currentCity={currentCity} />
              : <EmptyContent currentCity={currentCity} />
          }
        </div>
      </main>
    </div>
  );
}

export default MainPage;
