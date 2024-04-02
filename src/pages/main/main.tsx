import { Helmet } from 'react-helmet-async';
import OffersList from '../../components/offers-list/offers-list';
// import { TPreviewOffers } from '../../types/offer';
import CitiesList from '../../components/cities-list/cities-list';
import NoOffersList from '../../components/no-offers-list/no-offers-list';
import { useAppSelector } from '../../hooks';
// import { CITIES } from '../../const';

// type MainProps = {
//   // offersCount: number;
//   offers: TPreviewOffers;
// };

// export default function Main({offersCount}: MainProps): JSX.Element {
export default function Main(): JSX.Element {

  const currentCity = useAppSelector((state) => state.currentCity);
  const offers = useAppSelector((state) => state.offers);

  return (
    <main className="page__main page__main--index">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList />
        </section>
      </div>
      <div className="cities">
        {(offers.length === 0) ? <NoOffersList city={currentCity}/> : <OffersList offers = {offers} city={currentCity}/>}
      </div>
    </main>
  );
}
