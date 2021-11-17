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
  UpdateOffers = 'data-offers/update-offers',
  SetFavoriteOffers = 'data-offers/set-favorite-offers',
  UpdateFavoriteOffers = 'data-offers/update-favorite-offers',
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
  Favorite = '/favorite',
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

export const CityLocation = {
  [City.Paris] : {latitude: 48.864716, longitude: 2.349014, zoom: 10},
  [City.Amsterdam] : {latitude: 52.3909553943508, longitude: 4.85309666406198, zoom: 10},
  [City.Brussels] : {latitude: 50.846557, longitude: 4.351697, zoom: 10},
  [City.Cologne] : {latitude: 50.938361, longitude: 6.959974, zoom: 10},
  [City.Dusseldorf] : {latitude: 51.225402, longitude: 6.776314, zoom: 10},
  [City.Hamburg] : {latitude: 53.550341, longitude: 10.000654, zoom: 10},
};

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
