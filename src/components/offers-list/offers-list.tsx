import { useState } from 'react';
import OfferCard from '../offer-card/offer-card';
import { TPreviewOffer, TPreviewOffers } from '../../types/offer';
// import { TPreviewOffers } from '../../types/offer';
import { Nullable } from 'vitest';
import Map from '../map/map';

type TOfferListProps = {
  offers: TPreviewOffers;
};

export default function OffersList({offers}: TOfferListProps): JSX.Element {
  // раскомментировать позже
  const [activeOffer, setActiveOffer] = useState<Nullable<TPreviewOffer>>(null);
  const handleHover = (offer?: TPreviewOffer) => {
    setActiveOffer(offer || null);
  };
  // console.log('OffersList-offers:', offers);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in Amsterdam</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by </span>
          <span className="places__sorting-type" tabIndex={0}>
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={0}>Popular</li>
            <li className="places__option" tabIndex={0}>Price: low to high</li>
            <li className="places__option" tabIndex={0}>Price: high to low</li>
            <li className="places__option" tabIndex={0}>Top rated first</li>
          </ul>
        </form>
        <div className="cities__places-list places__list tabs__content">
          {
            offers.map((offer: TPreviewOffer) => (
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
