import classNames from 'classnames';
import { CITIES } from '../../const';
// import { previewOffers } from '../../mocks/offers';
import { changeCurrentCity, loadOffers } from '../../store/actions';
import { useAppSelector, useAppDispatch } from '../../hooks';

export default function CitiesList(): JSX.Element {

  const currentCity = useAppSelector((state) => state.currentCity);
  const offers = useAppSelector((state) => state.offers);

  const dispatch = useAppDispatch();

  const cityTabClickHandler = ({currentTarget}: React.MouseEvent<HTMLElement>) => {
    dispatch(changeCurrentCity({city: currentTarget.innerText}));
    // dispatch(updateOffers());
    dispatch(loadOffers({offers: offers.filter((offer) => offer.city.name === currentTarget.innerText)}));
  };

  return (
    <ul className="locations__list tabs__list">
      {
        CITIES.map((city) =>(
          <li key={city} className="locations__item">
            <a className={classNames({
              'locations__item-link tabs__item': true,
              'tabs__item--active': city === currentCity}
            )}
            href="#" data-city={city}
            onClick={cityTabClickHandler}
            >
              <span>{city}</span>
            </a>
          </li>
        ))
      }
    </ul>
  );
}
