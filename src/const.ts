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

export {AppRoute, AuthorizationStatus, CITIES, DEFAULT_CITY};
