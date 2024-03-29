import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../const';
import { previewOffers } from '../mocks/offers';
import { changeCurrentCity, loadOffers } from './actions';

const initialState = {
  currentCity: DEFAULT_CITY,
  offers: previewOffers
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity, (state, action) => {
      state.currentCity = action.payload.city;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload.offers;
    });
});

export {reducer};
