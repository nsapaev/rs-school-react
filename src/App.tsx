import { Component, createContext, useEffect, useState } from 'react';

import style from './App.module.css';
import { SearchComponent } from './components/SearchComponent';
import { Table } from './components/Table';
import { fetchRequest } from './helpers/helpers';
import { CallError } from './components/CallError';
import { Loader } from './components/Loader';
import { Routes, Route } from 'react-router';

interface FetchResultInterface {
  name: string;
  birth_year: string;
  gender: string;
  height: string;
  hair_color: string;
  eye_color: string;
}

interface SearchComponentState {
  inputValue: string;
  fetchResult: Array<FetchResultInterface>;
  isLoading: boolean;
  searchedValue: string;
}

const savedInputValue = localStorage.getItem('inputValue') || '';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>(savedInputValue);
  const [fetchResult, setFetchResult] = useState<Array<FetchResultInterface>>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchedValue, setSearchValue] = useState<string>('');
  const [pageCount, setPageCount] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  useEffect(() => {
    setIsLoading(true);
    fetchRequest(inputValue, currentPage)
      .then((data) => {
        setFetchResult(data.results);
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

  const onSendSearchValue = () => {
    localStorage.setItem('inputValue', inputValue.trim());
    setIsLoading(true);
    try {
      fetchRequest(inputValue.trim(), 1).then((data) => {
        setFetchResult(data.results);
        setPageCount(Math.ceil(data.count / 10));
      });
    } catch {
      throw new Error('something went wrong (:');
    } finally {
      setIsLoading(false);
      setSearchValue(inputValue.trim());
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

      <main>
        {fetchResult.length ? (
          <Table
            tableData={fetchResult}
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ) : (
          !isLoading && (
            <>
              upon request <b>{searchedValue} </b> no data
            </>
          )
        )}
        {isLoading && <Loader />}
      </main>

      <footer>
        <CallError />
      </footer>
    </div>
  );
};

export default App;
