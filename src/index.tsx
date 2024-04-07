import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
// import { AuthorizationStatus } from './const';
import { previewOffers, detailOffers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { Provider } from 'react-redux';
import { store } from './store';
import ErrorMessage from './components/error-message/error-message';
import { checkAuthAction, fetchOfferAction } from './store/api-actions';

store.dispatch(fetchOfferAction());
store.dispatch(checkAuthAction());
// const authorizationStatus = AuthorizationStatus.Auth;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <App offers = {previewOffers} detailOffers = {detailOffers} reviews = {reviews} authorizationStatus={authorizationStatus}/> */}
    <Provider store = {store}>
      <ErrorMessage />
      <App offers = {previewOffers} detailOffers = {detailOffers} reviews = {reviews} />
      {/* <App offers = {previewOffers}/> */}
      {/* <App /> */}
    </Provider>
  </React.StrictMode>
);
