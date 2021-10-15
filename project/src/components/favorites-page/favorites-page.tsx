import {Offers} from '../../types/offer';
import FavoriteCard from '../favorite-card/favorite-card';
import Header from '../header/header';

type FavoriteProps = {
  offers: Offers;
}

function FavoritesPage(props: FavoriteProps): JSX.Element {
  const offers = props.offers;

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {offers
                .filter((offer) => offer.isFavorite)
                .map((offer) => <FavoriteCard offer={offer} key={offer.id}/>)}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
