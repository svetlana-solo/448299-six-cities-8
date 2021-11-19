import {City} from '../../const';
import {Offer} from '../../types/offer';
import FavoriteCard from '../favorite-card/favorite-card';

type FavoriteOffersListProps = {
  city: City,
  offers: Offer[],
}

function FavoriteList ({city, offers} : FavoriteOffersListProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((favoriteCard) => <FavoriteCard key={favoriteCard.id} offer={favoriteCard}/>)}
      </div>
    </li>
  );
}

export default FavoriteList;
