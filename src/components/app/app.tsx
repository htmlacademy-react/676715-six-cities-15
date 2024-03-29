import { HelmetProvider } from 'react-helmet-async';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import Page404 from '../../pages/page404/page404';
import { TPreviewOffers, TDetailOffers } from '../../types/offer';
// import { reviews } from '../../mocks/reviews';
import { TReviews } from '../../types/review';

type TAppProps = {
  // offersCount: number;
  offers: TPreviewOffers;
  detailOffers: TDetailOffers;
  reviews: TReviews;
  // authorizationStatus: AuthorizationStatus;
};

// export default function App({offers, authorizationStatus}: AppProps): JSX.Element {
export default function App({offers, detailOffers, reviews}: TAppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            // element={<Layout authorizationStatus = {AuthorizationStatus.Auth}/>}
            element={<Layout />}
          >
            <Route
              index
              element={<Main />}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus = {AuthorizationStatus.Auth}>
                  <Favorites offers = {offers} />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Login}
              element={<Login />}
            />
            <Route
              path={AppRoute.Offer}
              element={<Offer offers = {offers} detailOffers = {detailOffers} reviews = {reviews}/>}
              // element={<Offer detailOffers = {detailOffers} reviews = {reviews}/>}
            />
            <Route
              path="*"
              element={<Page404 />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
