import {Offer} from '../../types/offer';
import {getRating} from '../../utils';
import {changeFavoriteStatus} from '../../store/api-actions';
import {useDispatch} from 'react-redux';

type FavoriteCardProps = {
  offer: Offer;
}

function FavoriteCard({offer}: FavoriteCardProps): JSX.Element {
  const {previewImage, price, title, type, id, isFavorite, rating} = offer;

  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    dispatch(changeFavoriteStatus(id, Number(!isFavorite)));
  };

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button {isFavorite ? 'place-card__bookmark-button--active' : ''} button" type="button" onClick={handleFavoriteClick}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{`${isFavorite ? 'In bookmarks' : 'To bookmarks'}`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRating(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>);
}

export default FavoriteCard;
