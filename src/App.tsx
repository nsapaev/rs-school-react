import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import style from './App.module.css';
import { SearchComponent } from './components/SearchComponent';
import { Table } from './components/Table';
import { editData, fetchRequest } from './helpers/helpers';
import { CallError } from './components/CallError';
import { Loader } from './components/Loader';
import { Details } from './components/Details';
import { Pagination } from './components/Pagination';
import { DetailsFetchResultInterface } from './types/types';

interface FetchResultInterface {
  name: string;
  birth_year: string;
  gender: string;
  height: string;
  hair_color: string;
  eye_color: string;
}

const savedInputValue = localStorage.getItem('inputValue') || '';

const App: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const detailsParams = searchParams.get('details');

  const [inputValue, setInputValue] = useState<string>(savedInputValue);
  const [fetchResult, setFetchResult] = useState<Array<FetchResultInterface>>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchedValue, setSearchValue] = useState<string>('');
  const [pageCount, setPageCount] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(
    Number(localStorage.getItem('currentPage')) || 1
  );
  const [detailsIsLoading, setDetailsIsLoading] = useState<boolean>(false);
  const [detailsData, setDetailsData] = useState<
    Array<DetailsFetchResultInterface>
  >([]);

  const getDetails = async (value: string) => {
    setDetailsIsLoading(true);
    console.log('value', value);
    try {
      const data = await fetchRequest(value, 1);
      setDetailsData(editData(data.results));
      navigate(
        '/' +
          `?page=${currentPage}` +
          `&search=${searchedValue}&details=${data.results[0].name}`
      );
    } catch {
      throw new Error(`error to request details ${value}`);
    } finally {
      setDetailsIsLoading(false);
    }
  };

  useEffect(() => {
    const lSInputValue = localStorage.getItem('inputValue') || '';
    setIsLoading(true);
    fetchRequest(inputValue, currentPage)
      .then((data) => {
        setFetchResult(data.results);
        navigate('/' + `?page=${currentPage}` + `&search=${lSInputValue}`);
        setPageCount(Math.ceil(data.count / 10));
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        setIsLoading(false);
        setSearchValue(inputValue.trim());
      });
  }, [currentPage]);

  const onSendSearchValue = async () => {
    localStorage.setItem('inputValue', inputValue.trim());
    localStorage.setItem('currentPage', String(1));
    setIsLoading(true);
    try {
      const data = await fetchRequest(inputValue.trim(), 1);
      setFetchResult(data.results);
      setPageCount(Math.ceil(data.count / 10));
    } catch {
      throw new Error('something went wrong fetching data (:');
    } finally {
      setIsLoading(false);
      setSearchValue(inputValue.trim());
    }
  };

  const removeDetails = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'TD' || target.tagName === 'TR') {
      if (target.closest('tbody')) {
        return;
      } else {
        searchParams.delete('details');
        setSearchParams(searchParams);
      }
    } else {
      searchParams.delete('details');
      setSearchParams(searchParams);
    }
  };

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
        <div
          onClick={(e) => {
            removeDetails(e);
          }}
          className={detailsParams ? style.leftSide : undefined}
        >
          {fetchResult.length && !isLoading ? (
            <div>
              <div className={detailsParams ? style.leftSide : undefined}>
                <Table getDetails={getDetails} tableData={fetchResult} />
              </div>
              <div>
                <Pagination
                  pageCount={pageCount}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </div>
          ) : (
            !isLoading && (
              <>
                upon request <b>{searchedValue} </b> no data
              </>
            )
          )}
          {isLoading && <Loader width={detailsParams ? 500 : 900} />}
        </div>
        {searchParams.get('details') && (
          <Details isLoading={detailsIsLoading} data={detailsData[0] || null} />
        )}
      </main>

      <footer>
        <CallError />
      </footer>
    </div>
  );
};

export default App;
