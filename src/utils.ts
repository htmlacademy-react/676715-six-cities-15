import dayjs from 'dayjs';
// import { TPreviewOffer } from './types/offer';
// import { previewOffers } from './mocks/offers';

// const MAX_NEAR_OFFERS = 3;

function capitalizeFirstLetter(string:string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRatingPercentage(rating:number): string {
  return `${(rating * 100 / 5)}%`;
}

function formatStringToDateTime(date:string): string {
  return dayjs(date).format('YYYY-MM-DD');
}

function formatStringToMonthYear(date:string): string {
  return dayjs(date).format('MMMM YYYY');
}

// function getNearOffers(offer: TPreviewOffer): TPreviewOffer[] {
//   const nearOffers: TPreviewOffer[] = [];

//   for (let i = 0; i < previewOffers.length; i++) {
//     if (previewOffers[i].id !== offer.id && previewOffers[i].city.name === offer.city.name) {
//       nearOffers.push(previewOffers[i]);
//     }

//     if (nearOffers.length >= MAX_NEAR_OFFERS) {
//       break;
//     }
//   }

//   return nearOffers;
// }

// export {capitalizeFirstLetter, getRatingPercentage, formatStringToDateTime, formatStringToMonthYear, getNearOffers};
export {capitalizeFirstLetter, getRatingPercentage, formatStringToDateTime, formatStringToMonthYear};
