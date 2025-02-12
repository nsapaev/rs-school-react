import { useEffect, useState } from 'react';
import { useNavigate, Outlet, useParams } from 'react-router-dom';

import style from './style.module.css';
import { SearchComponent } from '../../components/SearchComponent';
import { Table } from '../../components/Table';
import { CallError } from '../../components/CallError';
import { Loader } from '../../components/Loader';
import { Pagination } from '../../components/Pagination';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const paramsDetails = useParams().detailId;
  const [
    data,
    setFetchInputValue,
    currentPage,
    setCurrentPage,
    pageCount,
    loading,
  ] = useLocalStorage();

  const [inputValue, setInputValue] = useState<string>(
    localStorage.getItem('inputValue') || ''
  );

  const onSendSearchValue = () => {
    setFetchInputValue(inputValue);
    setCurrentPage(1);
  };

  useEffect(() => {
    navigate(`?search=${inputValue.trim()}&page=${currentPage}`);
  }, [currentPage]);

  return (
    <div className={style.body}>
      <header>
        <SearchComponent
          inputValue={inputValue}
          handleInputChange={setInputValue}
          onSendSearchValue={onSendSearchValue}
        />
      </header>

      <main className={style.main}>
        {!loading ? (
          <div className={paramsDetails ? style.table_short : style.table_full}>
            <Table tableData={data} />
            <Pagination
              pageCount={pageCount}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        ) : (
          <Loader />
        )}

        <div className={style.details}>
          <Outlet />
        </div>
      </main>

      <footer>
        <CallError />
      </footer>
    </div>
  );
};

export default MainPage;
