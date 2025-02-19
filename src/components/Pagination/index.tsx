import React from 'react';
import style from './style.module.css';
import { setCurrentPage } from '../../features/people/people-slice';
import { useAppDispatch } from '../../app/hooks';
interface PaginationPropsInterface {
  pageCount: number;
  currentPage: number;
}

const Pagination: React.FC<PaginationPropsInterface> = ({
  pageCount,
  currentPage,
}) => {
  const dispatch = useAppDispatch();
  const mapArray = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <div className={style.pagination__wrapper}>
      {mapArray.length > 1 &&
        mapArray.map((e, index) => (
          <div
            key={index}
            onClick={() => {
              dispatch(setCurrentPage(e));
            }}
            className={`${style.pagination__item} ${currentPage === e ? style.pagination__item_active : null} `}
          >
            {e}
          </div>
        ))}
    </div>
  );
};

export { Pagination };
