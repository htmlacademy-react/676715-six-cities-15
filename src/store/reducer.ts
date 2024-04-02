import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../const';
import { previewOffers } from '../mocks/offers';
import { changeCurrentCity, loadOffers, changeCurrentSortType } from './actions';
import { SortType } from '../const';

const initialState = {
  currentCity: DEFAULT_CITY,
  offers: previewOffers,
  currentSortType: SortType.POPULAR
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity, (state, action) => {
      state.currentCity = action.payload.city;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(changeCurrentSortType, (state, action) => {
      state.currentSortType = action.payload.sortType;
    });
});

export {reducer};
