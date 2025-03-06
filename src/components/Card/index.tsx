import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import style from './index.module.css';
import { DetailsFetchResultInterface } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { selectCard } from '../../features/people/people-slice';

interface CardPropsInterface {
  people: DetailsFetchResultInterface;
}

const Card: React.FC<CardPropsInterface> = ({ people }) => {
  const searchParams = useSearchParams().get('search');
  const selectedCards = useAppSelector((state) => state.people.selectedCards);
  const dispatch = useAppDispatch();
  const isChecked: boolean = !!selectedCards?.find(
    (element) => element.name === people.name
  );

  const changeHandler = () => dispatch(selectCard(people));
  return (
    <div data-testid={'card-wrapper'} className={style.wrapper}>
      <input
        type="checkbox"
        checked={isChecked}
        className={style.checkbox}
        onChange={changeHandler}
      />
      <Link
        data-testid={'card-link'}
        href={`/${searchParams ? `?search=${searchParams}` : ''}${
          searchParams ? `&details=${people.name}` : `?details=${people.name}`
        } `}
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
