import { Offer } from '../../types/offer';
import { Link, useHistory } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getRating } from '../../utils/utils';
import { changeFavoriteStatus } from '../../store/api-actions';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthorizationStatus } from '../../store/user-status/selectors';
import { AuthorizationStatus } from '../../const';

type OfferCardProps = {
  offer: Offer,
  onCardFocus?: (offer: number | null) => void,
}

function OfferCard(props: OfferCardProps): JSX.Element {
  const offer = props.offer;
  const { id, previewImage, title, isPremium, isFavorite, type, price, rating } = offer;
  const dispatch = useDispatch();
  const history = useHistory();
  const authStatus = useSelector(getAuthorizationStatus);

  const handleFavoriteClick = () => {
    if (authStatus !== AuthorizationStatus.Auth) {
      history.push(AppRoute.SignIn);
      return;
    }
    dispatch(changeFavoriteStatus(id, Number(!isFavorite)));
  };

  const handleMouseEnter = () => {
    if (props.onCardFocus) {
      props.onCardFocus(id);
    }
  };

  const handleMouseLeave = () => {
    if (props.onCardFocus) {
      props.onCardFocus(null);
    }
  };

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Room.replace(':id', `${id}`)}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button" onClick={handleFavoriteClick}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRating(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Room.replace(':id', `${id}`)}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
