import {useState} from 'react';
import {Offer, Offers} from '../../types/offer';
import OfferList from '../offer-list/offer-list';
import Header from '../header/header';
import Map  from '../map/map';

type MainPageProps = {
  offersCount: number;
  offers: Offers;
}

function MainPage(props: MainPageProps): JSX.Element {
  const offersCount = props.offersCount;
  const offers = props.offers;

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const city = offers[0].city;

  const onOfferListMouseEnter = (offerId: string) => {
    const currentPoint = offers.find((offer) => offer.id === offerId);
    setSelectedOffer(currentPoint);
  };

  const onOfferListMouseLeave = () => {
    setSelectedOffer(undefined);
  };


  return (
    <div className ="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active" href="/">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <OfferList offersCount={offersCount} offers={offers} onOfferListMouseEnter={onOfferListMouseEnter} onOfferListMouseLeave={onOfferListMouseLeave} />
            <div className="cities__right-section">
              <Map cityLocation={city.location} points={offers.map((offer) => ({title: offer.title, location: offer.location}))} selectedPoint={selectedOffer} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
