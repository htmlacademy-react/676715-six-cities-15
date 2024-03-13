export type TOfferLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TOfferHost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type TPreviewOffer =
{
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: {
    name: string;
    location: TOfferLocation;
  };
  location: TOfferLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type TDetailOffer = Omit <TPreviewOffer, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: TOfferHost;
  images: string[];
  maxAdults: number;
};

export type TPreviewOffers = TPreviewOffer[];

export type TDetailOffers = TDetailOffer[];
