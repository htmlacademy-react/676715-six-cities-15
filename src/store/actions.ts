import { createAction } from '@reduxjs/toolkit';
import { TPreviewOffers } from '../types/offer';

export const changeCurrentCity = createAction<{city: string}>('changeCurrentCity');

export const loadOffers = createAction<{offers: TPreviewOffers}>('loadOffers');

export const changeCurrentSortType = createAction<{sortType: string}>('changeCurrentSortType');
