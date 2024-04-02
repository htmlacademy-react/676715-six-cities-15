enum AppRoute {
  Root = '/',
  Favorites = '/favorites',
  Login = '/login',
  // Offer = '/offer'
  Offer = '/offer/:id'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const DEFAULT_CITY = CITIES[0];

const SortType = {
  POPULAR: 'Popular',
  PRICE_UP: 'Price: low to high',
  PRICE_DOWN: 'Price: high to low',
  RATING: 'Top rated first',
};

export {AppRoute, AuthorizationStatus, CITIES, DEFAULT_CITY, SortType};
