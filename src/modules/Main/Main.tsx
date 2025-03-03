'use client';
import { useEffect } from 'react';

import style from './style.module.css';

import { Cards } from '../../components/Cards';
import { Loader } from '../../components/Loader';
import { Pagination } from '../../components/Pagination';
import { useFetchPeopleQuery } from '../../api/people-api-slice';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { changeSearchValue } from '../../features/people/people-slice';

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const searchValue = useAppSelector((store) => store.people.value);
  const currentPage = useAppSelector((store) => store.people.currentPage);

  const { data, isFetching, isError, error } = useFetchPeopleQuery({
    page: currentPage,
    search: searchValue,
  });

  useEffect(() => {
    // navigate(
    //   `?search=${localStorage.getItem('search') || searchValue}&page=${currentPage}`
    // );
  }, [searchValue, currentPage]);

  useEffect(() => {
    dispatch(changeSearchValue(localStorage.getItem('search') || ''));
  }, [dispatch]);

  if (isError) {
    return (
      <>
        {error && (
          <p>{typeof error === 'string' ? error : JSON.stringify(error)}</p>
        )}
      </>
    );
  }

  return (
    <main className={style.main}>
      {!isFetching ? (
        <div>
          {data?.results.length ? (
            <>
              <Cards tableData={data.results} />
              <Pagination
                pageCount={Math.ceil(data.count / 10)}
                currentPage={currentPage}
              />
            </>
          ) : (
            <>no data</>
          )}
        </div>
      ) : (
        <Loader width={400} />
      )}
    </main>
  );
};

export default MainPage;
