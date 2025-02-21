import { Link, useLocation } from 'react-router';
import { PeopleInterface } from '../../api/people-api-slice';
import style from './index.module.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCard } from '../../features/people/people-slice';

const Card: React.FC<PeopleInterface> = ({ gender, mass, name }) => {
  const location = useLocation();
  const selectedCards = useAppSelector((state) => state.people.selectedCards);
  const dispatch = useAppDispatch();
  const isChecked: boolean = !!selectedCards.find(
    (element) => element === name
  );

  const changeHandler = () => dispatch(selectCard(name));
  return (
    <div className={style.wrapper}>
      <input
        type="checkbox"
        checked={isChecked}
        className={style.checkbox}
        onChange={changeHandler}
      />
      <Link to={`/details/${name}${location.search}`} className={style.card}>
        <div className={style.checkboxBlock}>
          <div className={style.name}>{name}</div>
        </div>
        <div className={style.mass}>
          mass: <b>{mass}</b>
        </div>
        <div className={style.gender}>
          gender: <b>{gender}</b>{' '}
        </div>
      </Link>
    </div>
  );
};

export { Card };
