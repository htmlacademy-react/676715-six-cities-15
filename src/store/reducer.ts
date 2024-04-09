import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../const';
// import { previewOffers } from '../mocks/offers';
// import { changeCurrentCity, loadOffers, changeCurrentSortType, requireAuthorization, setError, setOffersDataLoadingStatus } from './actions';
// import { changeCurrentCity, loadOffers, changeCurrentSortType, requireAuthorization, setOffersDataLoadingStatus, updateOffers } from './actions';
import { changeCurrentCity, loadOffers, changeCurrentSortType, requireAuthorization, setOffersDataLoadingStatus } from './actions';
import { SortType, AuthorizationStatus } from '../const';
import { TPreviewOffers } from '../types/offer';
// import { sortOffers } from '../utils/sort';

type InitialState = {
  currentCity: string;
  loadOffers: TPreviewOffers;
  offers: TPreviewOffers;
  currentSortType: string;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  // error: string | null;
};

const initialState: InitialState = {
  currentCity: DEFAULT_CITY,
  loadOffers: [],
  offers: [],
  currentSortType: SortType.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  // error: null
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
    // .addCase(updateOffers, (state) => {
    //   state.offers = action.payload.offers;
    //   if (state.loadOffers) {
    //     const offersByCity = [...state.loadOffers].filter((offer) => offer.city.name === state.currentCity);
    //     state.offers = sortOffers[state.currentSortType]([...offersByCity]);
    //   }
    // })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload.authorizationStatus;
    });
  // .addCase(setError, (state, action) => {
  //   state.error = action.payload;
  // });
});
