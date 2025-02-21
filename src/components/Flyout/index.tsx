import style from './style.module.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { unselectAllCards } from '../../features/people/people-slice';

const Flyout: React.FC = () => {
  const selectedCardsCount = useAppSelector(
    (state) => state.people.selectedCards
  ).length;
  const dispatch = useAppDispatch();

  const unselectHandler = () => dispatch(unselectAllCards());

  if (!selectedCardsCount) {
    return <></>;
  }

  return (
    <div className={style.flyoutWrapper}>
      <div className={style.flyoutBody}>
        <div className={style.flyoutContent}>
          selected items: {selectedCardsCount}
        </div>
        <div className={style.flyoutButtonsBlock}>
          <button className={style.flyoutButton} onClick={unselectHandler}>
            Unselect all
          </button>
          <button className={style.flyoutButton}>Download</button>
        </div>
      </div>
    </div>
  );
};

export { Flyout };
