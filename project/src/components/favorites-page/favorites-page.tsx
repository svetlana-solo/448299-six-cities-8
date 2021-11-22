import FavoriteList from '../favorite-list/favorite-list';
import EmptyFavoritePage from '../empty-favorite-page/empty-favorite-page';
import Header from '../header/header';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFavoriteOffersAction} from '../../store/api-actions';
import {getFavoriteOffers, getFavoriteLocation} from '../../store/data-offers/selectors';
import {useEffect} from 'react';
import {City, AppRoute} from '../../const';
import {Offer} from '../../types/offer';

const getOffersInCurrentCity = (offers: Offer[], city: City) => offers.slice().filter((offer) => offer.city.name === city);

function FavoritesPage(): JSX.Element {
  const dispatch = useDispatch();
  const favoriteOffers = useSelector(getFavoriteOffers);
  const favoriteLocations = useSelector(getFavoriteLocation);

  useEffect(()=> {
    dispatch(fetchFavoriteOffersAction());
  },[dispatch]);

  return (
    <div className="page">
      <Header/>

      {favoriteOffers?.length === 0
        ? <EmptyFavoritePage />
        :
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {favoriteLocations.map((city) => <FavoriteList key={city} city={city} offers={getOffersInCurrentCity(favoriteOffers,city)}/>)}
              </ul>
            </section>
          </div>
        </main>}
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
