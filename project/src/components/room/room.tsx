import {useParams} from 'react-router-dom';
import {getRating} from '../../utils';
import Header from '../header/header';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewForm from '../review-form/review-form';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import Loading from '../loading/loading';
import {AuthorizationStatus} from '../../const';
import {fetchCurrentOfferAction, fetchCommentsAction, fetchNearbyOffersAction, addReviewAction} from '../../store/api-actions';
import {useEffect} from 'react';
import {CommentMessage} from '../../types/offer';
import {getReviews, getCurrentOffer, getNearbyOffers} from '../../store/room-page/selectors';
import {getAuthorizationStatus} from '../../store/user-status/selectors';
import {useDispatch, useSelector} from 'react-redux';

function ApartmentPicture({src}: {src: string}) {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={src} alt="studio"/>
    </div>
  );
}

function Good({goodName}: {goodName: string}) {
  return <li className="property__inside-item">{goodName}</li>;
}

function Room(): JSX.Element {

  const params: {id: string} = useParams();
  const currentRoomId = Number(params.id);
  const currentOffer = useSelector(getCurrentOffer);
  const nearbyOffers = useSelector(getNearbyOffers);
  const reviews = useSelector(getReviews);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();

  const handleReviewSubmit = ({comment, rating}: CommentMessage) => dispatch(addReviewAction({comment, rating}, currentRoomId));

  useEffect(()=>{
    dispatch(fetchCurrentOfferAction(currentRoomId));
    dispatch(fetchCommentsAction(currentRoomId));
    dispatch(fetchNearbyOffersAction(currentRoomId));
  }, [currentRoomId, dispatch]);

  if(!currentOffer || currentOffer.id !== currentRoomId){
    return <Loading />;
  }

  const {rating, title, description, host, isPremium, isFavorite, price, type, bedrooms, maxAdults, goods, images, city} = currentOffer;


  return(
    <div className="page">
      <Header/>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <span className="visually-hidden"></span>
              {images.map((image) => <ApartmentPicture src={image} key={image}/>)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                isPremium &&
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={isFavorite ? 'property__bookmark-button place-card__bookmark-button--active button' : 'property__bookmark-button button'} type="button">
                  <svg className="place-card__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: getRating(rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating }</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => <Good goodName={good} key={good}/>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={host.isPro ? 'property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper' : 'property__avatar-wrapper user__avatar-wrapper'}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {
                    host.isPro &&
                    <span className="property__user-status">Pro</span>
                  }
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList reviews={reviews}/>
                {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm onSubmit={handleReviewSubmit}/>}
              </section>
            </div>
          </div>
          <Map city={city.name} offers={nearbyOffers} isRoomMap/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList offers={nearbyOffers} isRoomOffersList/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;
