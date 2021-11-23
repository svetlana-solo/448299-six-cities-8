import {Offer, Review} from '../types/offer';
import {City} from '../const';

export const offers: Offer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: City.Amsterdam,
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine'],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: ['img/1.png', 'img/2.png'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 122,
    rating: 4.8,
    title: 'The First of example offer',
    type: 'apartment',
  },{
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: City.Amsterdam,
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 2,
    images: ['img/1.png', 'img/2.png'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 109,
    rating: 4.8,
    title: 'the Second of example offer',
    type: 'apartment',
  },
];

export const offersWithFavoriteStatus : Offer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: City.Amsterdam,
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Washing machine'],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: ['img/1.png', 'img/2.png'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 122,
    rating: 4.8,
    title: 'The First of example offer',
    type: 'apartment',
  },{
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: City.Amsterdam,
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 2,
    images: ['img/1.png', 'img/2.png'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 109,
    rating: 4.8,
    title: 'the Second of example offer',
    type: 'apartment',
  },
];

export const offerWithFavoriteStatus : Offer = {
  bedrooms: 2,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: City.Amsterdam,
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: ['Heating', 'Washing machine', 'Dishwasher', 'Cable TV'],
  host: {
    avatarUrl: 'img/1.png',
    id: 5,
    isPro: true,
    name: 'Angelina',
  },
  id: 1,
  images: ['img/1.png', 'img/2.png'],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  maxAdults: 3,
  previewImage: 'img/apartment-01.jpg',
  price: 134,
  rating: 4.9,
  title: 'The First of example offer',
  type: 'apartment',
};

export const offerWithoutFavoriteStatus : Offer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: City.Amsterdam,
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: ['Heating', 'Washing machine'],
  host: {
    avatarUrl: 'img/1.png',
    id: 3,
    isPro: true,
    name: 'Angelina',
  },
  id: 1,
  images: ['img/1.png', 'img/2.png'],
  isFavorite: false,
  isPremium: true,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'img/apartment-01.jpg',
  price: 122,
  rating: 4.8,
  title: 'The Second of example offer',
  type: 'apartment',
};

export const reviews : Review[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2020-05-01T14:13:56.000Z',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/1.png',
      id: 4,
      isPro: false,
      name: 'Max',
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-06-02T14:13:56.000Z',
    id: 2,
    rating: 3,
    user: {
      avatarUrl: 'img/2.png',
      id: 5,
      isPro: true,
      name: 'Max',
    },
  },
];
