import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
// import { AuthorizationStatus } from './const';
import { previewOffers, detailOffers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { Provider } from 'react-redux';
import { store } from './store';

// const authorizationStatus = AuthorizationStatus.Auth;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <App offers = {previewOffers} detailOffers = {detailOffers} reviews = {reviews} authorizationStatus={authorizationStatus}/> */}
    <Provider store = {store}>
      <App offers = {previewOffers} detailOffers = {detailOffers} reviews = {reviews} />
    </Provider>
  </React.StrictMode>
);
