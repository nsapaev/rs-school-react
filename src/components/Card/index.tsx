import { Link, useLocation } from 'react-router';
import { PeopleInterface } from '../../api/people-api-slice';
import style from './index.module.css';

const Card: React.FC<PeopleInterface> = ({ gender, mass, name }) => {
  const location = useLocation();

  return (
    <Link to={`/details/${name}${location.search}`} className={style.card}>
      <div className={style.name}>{name}</div>
      <div className={style.mass}>
        mass: <b>{mass}</b>
      </div>
      <div className={style.gender}>
        gender: <b>{gender}</b>{' '}
      </div>
    </Link>
  );
};

export { Card };
