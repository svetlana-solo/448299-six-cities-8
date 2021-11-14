import {ThunkActionResult} from '../types/action';
import {setOffers, setCurrentOffer, setNearbyOffers, setReviews, requireAuthorization, requireLogout} from './action';
import {saveToken, dropToken, Token} from '../services/token';
import {APIRoute, AuthorizationStatus} from '../const';
import {CommentMessage, Offer, OfferFromServer, Review, ReviewFromServer} from '../types/offer';
import {AuthData} from '../types/auth-data';

const adaptOfferToClient = (offer: OfferFromServer): Offer =>
  ({
    bedrooms: offer.bedrooms,
    city: {
      location: {
        latitude: offer.city.location.latitude,
        longitude: offer.city.location.longitude,
        zoom: offer.city.location.zoom,
      },
      name: offer.city.name,
    },
    description: offer.description,
    goods: offer.goods,
    host: {
      avatarUrl: offer.host.avatar_url,
      id: offer.host.id,
      isPro: offer.host.is_pro,
      name: offer.host.name,
    },
    id: offer.id,
    images: offer.images,
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    location: {
      latitude: offer.location.latitude,
      longitude: offer.location.longitude,
      zoom: offer.location.zoom,
    },
    maxAdults: offer.max_adults,
    previewImage: offer.preview_image,
    price: offer.price,
    rating: offer.rating,
    title: offer.title,
    type: offer.type,
  });

const adaptReviewToClient = (review: ReviewFromServer): Review =>
  ({
    comment: review.comment,
    date: review.date,
    id: review.id,
    rating: review.rating,
    user: {
      avatarUrl: review.user.avatar_url,
      id: review.user.id,
      isPro: review.user.is_pro,
      name: review.user.name,
    },
  });

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.get<OfferFromServer[]>(APIRoute.Offers)
      .then((response) => response.data.map((offer) => adaptOfferToClient(offer)))
      .then((response) => dispatch(setOffers(response)));
  };

export const fetchCurrentOfferAction = (currentOfferId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.get<OfferFromServer>(`${APIRoute.Offers}/${currentOfferId}`)
      .then((response) => adaptOfferToClient(response.data))
      .then((response) => dispatch(setCurrentOffer(response)));
  };

export const fetchCommentsAction = (currentOfferId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.get<ReviewFromServer[]>(`${APIRoute.Comments}/${currentOfferId}`)
      .then((response) => response.data.map((review) => adaptReviewToClient(review)))
      .then((response) => dispatch(setReviews(response)));
  };

export const fetchNearbyOffersAction = (currentOfferId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.get<OfferFromServer[]>(`${APIRoute.Offers}/${currentOfferId}${APIRoute.Nearby}`)
      .then((response) => response.data.map((offer) => adaptOfferToClient(offer)))
      .then((response) => dispatch(setNearbyOffers(response)));
  };

export const addReviewAction = ({comment, rating}: CommentMessage, currentOfferId: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.post<ReviewFromServer[]>(`${APIRoute.Comments}/${currentOfferId}`, {comment, rating})
      .then((response) => response.data.map((review) => adaptReviewToClient(review)))
      .then((response) => dispatch(setReviews(response)));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };


export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };

