import { useState } from 'react';
import OfferCard from '../offer-card/offer-card';
import { TPreviewOffer, TPreviewOffers } from '../../types/offer';
// import { TPreviewOffers } from '../../types/offer';
import { Nullable } from 'vitest';
import Map from '../map/map';
import SortingForm from '../sorting-form/sorting-form';
import { sortOffers } from '../../utils/sort';
// import { useAppSelector, useAppDispatch } from '../../hooks';
import { useAppSelector } from '../../hooks';

type TOfferListProps = {
  offers: TPreviewOffers;
  city: string;
};

// export default function OffersList({offers}: TOfferListProps): JSX.Element {
export default function OffersList({offers, city}: TOfferListProps): JSX.Element {

  const [activeOffer, setActiveOffer] = useState<Nullable<TPreviewOffer>>(null);

  const handleHover = (offer?: TPreviewOffer) => {
    setActiveOffer(offer || null);
  };
  // console.log('OffersList-offers:', offers);

  const currentSortType = useAppSelector((state) => state.currentSortType);
  const sortedforListOffers = sortOffers[currentSortType]([...offers]);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.length} place{offers.length > 1 && 's'} to stay in {city}
        </b>

        <SortingForm />

        <div className="cities__places-list places__list tabs__content">
          {
            // offers.map((offer: TPreviewOffer) => (
            sortedforListOffers.map((offer: TPreviewOffer) => (
              <OfferCard
                key={offer.id}
                // {...offer}
                offer={offer}
                handleHover={handleHover}
              />
            ))
          }
        </div>
      </section>
      <div className="cities__right-section">
        {/* <section className="cities__map map"></section> */}
        {/* <Map className='cities__map' city={currentLocation} offers={offers} activeOfferId={activeOffer?.id}/> */}
        <Map
          className='cities__map'
          city={offers[0].city}
          offers={offers}
          activeOfferId={activeOffer?.id}
        />
      </div>
    </div>
  );
}
