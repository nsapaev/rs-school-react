import React from 'react';
import style from './style.module.css';

interface PaginationPropsInterface {
  pageCount: number;
  currentPage: number;
  setCurrentPage: (selectedPage: number) => void;
}

const Pagination: React.FC<PaginationPropsInterface> = ({
  pageCount,
  currentPage,
  setCurrentPage,
}) => {
  const mapArray = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <div className={style.pagination__wrapper}>
      {mapArray.length > 1 &&
        mapArray.map((e, index) => (
          <div
            key={index}
            onClick={() => {
              localStorage.setItem('currentPage', String(e));
              setCurrentPage(e);
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
