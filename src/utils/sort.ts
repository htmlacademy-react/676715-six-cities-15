import { SortType } from '../const.js';
import { sortPriceDown, sortPriceUp, sortOfferRating } from './offer.js';
import { TPreviewOffers } from '../types/offer.js';

const sortOffers = {
  [SortType.POPULAR]: (offers: TPreviewOffers) => [...offers],
  [SortType.PRICE_UP]: (offers: TPreviewOffers) => offers.sort(sortPriceUp),
  [SortType.PRICE_DOWN]: (offers: TPreviewOffers) => offers.sort(sortPriceDown),
  [SortType.RATING]: (offers: TPreviewOffers) => offers.sort(sortOfferRating)
};

export {sortOffers};
