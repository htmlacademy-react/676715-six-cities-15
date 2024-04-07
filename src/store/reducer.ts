import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../const';
// import { previewOffers } from '../mocks/offers';
import { changeCurrentCity, loadOffers, changeCurrentSortType, requireAuthorization, setError, setOffersDataLoadingStatus } from './actions';
import { SortType, AuthorizationStatus } from '../const';
import { TPreviewOffers } from '../types/offer';

type InitialState = {
  currentCity: string;
  offers: TPreviewOffers;
  currentSortType: string;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  currentCity: DEFAULT_CITY,
  offers: [],
  currentSortType: SortType.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity, (state, action) => {
      state.currentCity = action.payload.city;
    })
    .addCase(changeCurrentSortType, (state, action) => {
      state.currentSortType = action.payload.sortType;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
