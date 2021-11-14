export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  Error = '/404',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum ActionType {
  SetOffers = 'data-offers/set-offers',
  SetCity = 'main-page/set-city',
  SetSortOption = 'main-page/set-sort-option',
  SetReviews = 'room-page/set-reviews',
  SetCurrentOffer = 'room-page/set-current-offer',
  SetNearbyOffers = 'room-page/set-nearby-offers',
  RequireAuthorization = 'user-status/require-authorization',
  RequireLogout = 'user-status/require-logout',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Nearby = '/nearby',
}

export enum SortOption {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export enum City {
  Amsterdam = 'Amsterdam',
  Brussels = 'Brussels',
  Cologne = 'Cologne',
  Dusseldorf = 'Dusseldorf',
  Hamburg = 'Hamburg',
  Paris = 'Paris',
}

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
