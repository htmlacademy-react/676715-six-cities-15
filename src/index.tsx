import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { AuthorizationStatus } from './const';
import { previewOffers, detailOffers } from './mocks/offers';
import { reviews } from './mocks/reviews';

const authorizationStatus = AuthorizationStatus.Auth;

// const Setting = {
//   OffersCount: 5
// } as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <App offersCount = {Setting.OffersCount} /> */}
    <App offers = {previewOffers} detailOffers = {detailOffers} reviews = {reviews} authorizationStatus={authorizationStatus}/>
  </React.StrictMode>
);
