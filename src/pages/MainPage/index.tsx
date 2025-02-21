import { useEffect } from 'react';
import { useNavigate, Outlet, useParams } from 'react-router-dom';

import style from './style.module.css';

import { Cards } from '../../components/Cards';
import { Loader } from '../../components/Loader';
import { Pagination } from '../../components/Pagination';
import { useFetchPeopleQuery } from '../../api/people-api-slice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changeSearchValue } from '../../features/people/people-slice';

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const paramsDetails = useParams().detailId;
  const searchValue = useAppSelector((store) => store.people.value);
  const currentPage = useAppSelector((store) => store.people.currentPage);

  const { data, isFetching, isError, error } = useFetchPeopleQuery({
    page: currentPage,
    search: searchValue,
  });

  useEffect(() => {
    navigate(
      `?search=${localStorage.getItem('search') || searchValue}&page=${currentPage}`
    );
  }, [searchValue, currentPage, navigate]);

  useEffect(() => {
    dispatch(changeSearchValue(localStorage.getItem('search') || ''));
  }, [dispatch]);

  if (isError) {
    return <>{error}</>;
  }

  return (
    <main className={style.main}>
      {!isFetching ? (
        <div className={paramsDetails ? style.table_short : style.table_full}>
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
      <Outlet />
    </main>
  );
};

export default MainPage;
