import { useEffect, useState } from 'react';
import { editData } from '../helpers/helpers';
import { DataListInterface } from '../types/types';

const BASE_URL = 'https://swapi.dev/api/people/';
export const useLocalStorage = (): [
  Array<DataListInterface>,
  React.Dispatch<React.SetStateAction<string>>,
  number,
  React.Dispatch<React.SetStateAction<number>>,
  number,
  boolean,
] => {
  const getSearchValue = () => {
    const LSSearchValue = localStorage.getItem('inputValue');
    if (LSSearchValue) {
      return String(LSSearchValue);
    }
    return '';
  };
  const getCurrentPage = () => {
    const LSCurrentPage = localStorage.getItem('currentPage');

    if (LSCurrentPage) {
      return +JSON.parse(LSCurrentPage);
    }
    return 1;
  };

  const fetchRequest = async (searchParams: string, currentPage?: number) => {
    try {
      setLoading(true);
      const search = '?search=' + searchParams || '';
      const page = '&page=' + currentPage || '';
      const url = BASE_URL + search + page;
      const response = await fetch(url);
      const data = await response.json();
      return data || [];
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const [data, setData] = useState<Array<DataListInterface>>([]);
  const [pagesCount, setPagesCount] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>(getSearchValue);
  const [currentPage, setCurrentPage] = useState<number>(getCurrentPage);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('inputValue', String(searchValue));
    localStorage.setItem('currentPage', String(currentPage));

    fetchRequest(searchValue, currentPage).then((data) => {
      setData(data.results);
      setPagesCount(Math.ceil(data.count / 10));
    });
  }, [searchValue, currentPage]);

  return [
    data,
    setSearchValue,
    currentPage,
    setCurrentPage,
    pagesCount,
    loading,
  ];
};
