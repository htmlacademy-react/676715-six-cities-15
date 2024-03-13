import { Helmet } from 'react-helmet-async';
import OfferCard from '../../components/offer-card/offer-card';
// import Header from '../../components/layout/layout';
import { TPreviewOffers } from '../../types/offer';
import { TPreviewOffer } from '../../types/offer';

type TFavoritesProps = {
  // offersCount: number;
  offers: TPreviewOffers
};

export default function Favorites({offers}: TFavoritesProps): JSX.Element {
  // console.log('Offers', offers);
  let allOffersCities: string[] = [];

  const favoritedOffers: TPreviewOffers = offers.filter((offer) => offer.isFavorite);
  // console.log('favoritedOffers', favoritedOffers);

  favoritedOffers.forEach((offer: TPreviewOffer) => allOffersCities.push(offer.city.name));
  // console.log('allOffersCities: ', allOffersCities);

  const uniqueOffersCities: string[] = allOffersCities.filter((item:string, i:number, array: string[]) => i == array.indexOf(item));
  // console.log('uniqueOffersCities: ', uniqueOffersCities);

  return (
    <main className="page__main page__main--favorites">
      <Helmet>
        <title>6 cities - Favorites</title>
      </Helmet>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {
              uniqueOffersCities.map((city, index) => {
                return (
                  <li key={index} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {
                        favoritedOffers.map((offer) => {
                          if (city === offer.city.name) {
                            return (
                              <OfferCard
                                key={offer.id}
                                {...offer}
                                // offer={offer}
                                // handleHover={handleHover}
                              />
                            )
                          }
                        })
                      }
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </section>
      </div>
    </main>
  );
}
