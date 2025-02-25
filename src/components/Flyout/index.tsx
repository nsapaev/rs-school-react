import style from './style.module.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { unselectAllCards } from '../../features/people/people-slice';
import { DownloadFile } from '../DownloadFile';

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
          <DownloadFile fileName={`${selectedCardsCount}_peoples.csv`} />
        </div>
      </div>
    </div>
  );
};

export { Flyout };
