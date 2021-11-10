export type Offer = {
  bedrooms: number,
  city: {
    location: Location,
    name: string,
  },
  description: string,
  goods: string[],
  host: HostInfo,
  id: number,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: Location,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
};

export type OfferFromServer = {
  bedrooms: number,
  city: {
    location: Location,
    name: string
  },
  description: string,
  goods: string[],
  host: {
    'avatar_url': string,
    id: number,
    'is_pro': boolean,
    name: string
  },
  id: number,
  images: string[],
  'is_favorite': boolean,
  'is_premium': boolean,
  location: Location,
  'max_adults': number,
  'preview_image': string,
  price: number,
  rating: number,
  title: string,
  type: string
}

export type Offers = Offer[];

export type HostInfo = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string,
};

export type Location = {
  latitude: number,
  longitude: number,
  zoom: number
}

export enum OfferType {
  Apartment = 'apartment',
  PrivateRoom = 'room',
  House = 'house',
  Hotel = 'hotel'
}

export type Review = {
  comment: string,
  date: Date,
  id: number,
  rating: number,
  user: {
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string
  }
};

export type Reviews = Review[];

export type ReviewFromServer = {
  comment: string,
  date: Date,
  id: number,
  rating: number,
  user: {
    'avatar_url': string,
    id: number,
    'is_pro': boolean,
    name: string
  }
};
