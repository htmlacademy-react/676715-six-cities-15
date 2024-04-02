import classNames from 'classnames';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCurrentSortType } from '../../store/actions';
import { SortType } from '../../const';

export default function SortingForm(): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);

  const currentSortType = useAppSelector((state) => state.currentSortType);

  const dispatch = useAppDispatch();

  const sortClickHandler = ({currentTarget}: React.MouseEvent<HTMLElement>) => {
    dispatch(changeCurrentSortType({sortType: currentTarget.innerText}));
    setIsOpened(!isOpened);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setIsOpened(!isOpened)}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames({
        'places__options places__options--custom': true,
        'places__options--opened': isOpened
      })}
      >
        {
          Object.entries(SortType).map(([key, value], index) => (
            <li
              key={key.toLowerCase()}
              className={classNames({
                'places__option': true,
                'places__option--active': currentSortType === value
              })}
              tabIndex={index}
              onClick={sortClickHandler}
            >
              {value}
            </li>
          ))
        }
      </ul>
    </form>
  );
}
