import { createAction } from '@reduxjs/toolkit';
import { TPreviewOffers } from '../types/offer';
import { AuthorizationStatus, AppRoute } from '../const';

export const changeCurrentCity = createAction<{city: string}>('changeCurrentCity');

export const loadOffers = createAction<{offers: TPreviewOffers}>('loadOffers');

export const updateOffers = createAction('updateOffers');

export const changeCurrentSortType = createAction<{sortType: string}>('changeCurrentSortType');

// export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
export const requireAuthorization = createAction<{authorizationStatus: AuthorizationStatus}>('requireAuthorization');

// export const setError = createAction<string | null>('setError');

export const setOffersDataLoadingStatus = createAction<boolean>('setOffersDataLoadingStatus');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
