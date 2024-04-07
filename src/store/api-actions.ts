import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { TPreviewOffers } from '../types/offer.js';
// import { loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus, redirectToRoute } from './actions.js';
import { loadOffers, requireAuthorization, setOffersDataLoadingStatus, redirectToRoute } from './actions.js';
// import { loadOffers, requireAuthorization, setOffersDataLoadingStatus } from './actions.js';
import {saveToken, dropToken} from '../services/token';
// import {APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR, AppRoute} from '../const';
import {APIRoute, AuthorizationStatus, AppRoute} from '../const';
// import {APIRoute, AuthorizationStatus} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
// import { store } from './index.js';

// export const clearErrorAction = createAsyncThunk(
//   'clearError',
//   () => {
//     setTimeout(
//       () => store.dispatch(setError(null)),
//       TIMEOUT_SHOW_ERROR,
//     );
//   },
// );

export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<TPreviewOffers>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers({offers: data}));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    // const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    // saveToken(token);
    // dispatch(requireAuthorization(AuthorizationStatus.Auth));
    // dispatch(redirectToRoute(AppRoute.Root));
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      // console.log('авторизация прошла');
      dispatch(redirectToRoute(AppRoute.Root));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      // console.log('авторизация не прошла');
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
