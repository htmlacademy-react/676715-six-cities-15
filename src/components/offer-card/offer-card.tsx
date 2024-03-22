import { TPreviewOffer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter, getRatingPercentage } from '../../utils';

type TOfferCardProps = {
  // раскомментировать позже
  offer: TPreviewOffer;
  handleHover: (offer?: TPreviewOffer) => void;
  // id: string;
  // isPremium: boolean;
  // title: string;
  // previewImage: string;
  // price: number;
  // isFavorite: boolean;
  // rating: number;
  // type: string;
};

// раскомментировать позже
export default function OfferCard({offer, handleHover}: TOfferCardProps): JSX.Element {
  const handleMouseOn = () => {
    handleHover(offer);
  };

  const handleMouseOff = () => {
    handleHover();
  };

// вариант 1 - чистые свойства, без offer
// export default function OfferCard({id, isPremium, title, previewImage, price, isFavorite, rating, type}: TOfferCardProps): JSX.Element {

  const {id, isPremium, title, previewImage, price, isFavorite, rating, type} = offer;
  const inFavoritesIcon = isFavorite ? 'place-card__bookmark-button--active' : '';
  const inFavoritesText = isFavorite ? 'In bookmarks' : 'To bookmarks';

  return (
    <Link to={`/offer/${id}`}>
      <article
        className="cities__card place-card"
        onMouseEnter={handleMouseOn}
        onMouseLeave={handleMouseOff}
      >

        {isPremium && <div className="place-card__mark"><span>Premium</span></div>}

        <div className="cities__image-wrapper place-card__image-wrapper">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={title}/>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={`place-card__bookmark-button ${inFavoritesIcon} button`} type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">{inFavoritesText}</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: getRatingPercentage(rating)}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            {title}
          </h2>
          <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
        </div>
      </article>
    </Link>
  );
}
