import {Offer, Review, OfferFromServer, ReviewFromServer} from '../types/offer';
import dayjs from 'dayjs';

const ONE_STAR_PERCENT = 20;

export const getRating = (rating: number): string => `${ONE_STAR_PERCENT*Math.round(rating)}%`;

export const getRandomInteger = (min: number, max: number) : number => Math.floor(Math.random() * (max - min + 1)) + min;

export const sortDate = (A: Review, B: Review) : number => dayjs(B.date).diff(dayjs(A.date));

export const adaptOfferToServer = (offer: Offer): OfferFromServer =>
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
      'avatar_url': offer.host.avatarUrl,
      id: offer.host.id,
      'is_pro': offer.host.isPro,
      name: offer.host.name,
    },
    id: offer.id,
    images: offer.images,
    'is_favorite': offer.isFavorite,
    'is_premium': offer.isPremium,
    location: {
      latitude: offer.location.latitude,
      longitude: offer.location.longitude,
      zoom: offer.location.zoom,
    },
    'max_adults': offer.maxAdults,
    'preview_image': offer.previewImage,
    price: offer.price,
    rating: offer.rating,
    title: offer.title,
    type: offer.type,
  });

export const adaptReviewToServer = (review: Review): ReviewFromServer =>
  ({
    comment: review.comment,
    date: review.date,
    id: review.id,
    rating: review.rating,
    user: {
      'avatar_url': review.user.avatarUrl,
      id: review.user.id,
      'is_pro': review.user.isPro,
      name: review.user.name,
    },
  });

export const disableReviewForm = () :void => document.querySelectorAll('form input, form textarea, form button').forEach((elem) => elem.setAttribute('disabled', 'disabled'));

export const enableReviewForm = () :void => document.querySelectorAll('form input, form textarea, form button').forEach((elem) => elem.removeAttribute('disabled'));
