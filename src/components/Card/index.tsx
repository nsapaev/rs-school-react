import { Link, useLocation } from 'react-router';

import style from './index.module.css';
import { DetailsFetchResultInterface } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCard } from '../../features/people/people-slice';

interface CardPropsInterface {
  people: DetailsFetchResultInterface;
}

const Card: React.FC<CardPropsInterface> = ({ people }) => {
  const location = useLocation();
  const selectedCards = useAppSelector((state) => state.people.selectedCards);
  const dispatch = useAppDispatch();
  const isChecked: boolean = !!selectedCards.find(
    (element) => element.name === people.name
  );

  const changeHandler = () => dispatch(selectCard(people));
  return (
    <div className={style.wrapper}>
      <input
        type="checkbox"
        checked={isChecked}
        className={style.checkbox}
        onChange={changeHandler}
      />
      <Link
        to={`/details/${people.name}${location.search}`}
        className={style.card}
      >
        <div className={style.checkboxBlock}>
          <div className={style.name}>{people.name}</div>
        </div>
        <div className={style.mass}>
          mass: <b>{people.mass}</b>
        </div>
        <div className={style.gender}>
          gender: <b>{people.gender}</b>{' '}
        </div>
      </Link>
    </div>
  );
};

export { Card };
