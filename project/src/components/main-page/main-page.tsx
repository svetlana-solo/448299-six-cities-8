import {useState} from 'react';
import OffersList from '../offers-list/offers-list';
import Header from '../header/header';
import Map  from '../map/map';
import CitiesList from '../cities-list/cities-list';
import Sort from '../sort/sort';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {SortOption} from '../../const';
import {Offer} from '../../types/offer';

const getCitiesLocation = (city:string) => {
  switch(city){
    case 'Paris':{
      return {latitude: 48.864716,longitude: 2.349014,zoom: 10};
    }
    case 'Amsterdam':{
      return {latitude: 52.3909553943508,longitude: 4.85309666406198,zoom: 10};
    }
    default :{
      return {latitude: 48.864716,longitude: 2.349014,zoom: 10};
    }
  }
};

const getSortedOffers = (currentSortOption : string, offers: Offer[]) => {
  switch(currentSortOption){
    case SortOption.PriceHighToLow: {
      return offers.slice().sort((offerA, offerB) => offerB.price - offerA.price);
    }
    case SortOption.PriceLowToHigh: {
      return offers.slice().sort((offerA, offerB) => offerA.price - offerB.price);
    }
    case SortOption.TopRatedFirst: {
      return offers.slice().sort((offerA, offerB) => offerB.rating - offerA.rating);
    }
    default: {
      return offers;
    }
  }
};

type MainPageProps = {
  offers: Offer[],
}

const mapStateToProps = ({currentCity, currentSortOption}:State) => ({
  currentCity,
  currentSortOption,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MainPageProps;

function MainPage({offers, currentCity, currentSortOption}: ConnectedComponentProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<number | null>(null);
  const sortedOffers = getSortedOffers(currentSortOption, offers);

  return (
    <div className ="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList currentCity={currentCity}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {currentCity}</b>
              <Sort />
              <OffersList offers={sortedOffers} onCardFocus={setSelectedOffer} />
            </section>
            <div className="cities__right-section">
              <Map city={getCitiesLocation(currentCity)} offers={offers} selectedOffer={selectedOffer} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export {MainPage};
export default connector(MainPage);
