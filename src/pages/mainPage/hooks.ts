import { useEffect, useState } from 'react';

import type { ICountry } from '../../types/index.ts';
import { useAppSelector } from '../../state/hooks.ts';

const URL = 'https://restcountries.com/v3.1/all';

const getSortedState = (
  value: 'desc' | 'asc',
  data: ICountry[]
): ICountry[] => {
  if (value === 'desc') {
    const sortedData = data.sort((a: ICountry, b: ICountry) =>
      a.name.common.localeCompare(b.name.common)
    );
    return sortedData;
  } else if (value === 'asc') {
    const sortedData = data.sort((a: ICountry, b: ICountry) =>
      b.name.common.localeCompare(a.name.common)
    );
    return sortedData;
  }
  return data;
};

export const useGetCountries = () => {
  const region = useAppSelector((state) => state.countries.region);
  const sortedState = useAppSelector((state) => state.countries.sortedState);
  const searchedValue = useAppSelector(
    (state) => state.countries.searchedValue
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<ICountry[]>([]);
  const [error, setError] = useState<Error>();

  const fetchCountries = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  };

  const settingData = (filteredData: ICountry[]) => {
    if (sortedState === 'without') {
      setData(filteredData);
      setIsLoading(false);
    } else if (sortedState === 'desc') {
      setData(getSortedState(sortedState, filteredData));
      setIsLoading(false);
    } else if (sortedState === 'asc') {
      setData(getSortedState(sortedState, filteredData));
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchCountries()
      .then((responseData) => {
        const data = responseData.filter((country: ICountry) =>
          country.name.common
            .toLowerCase()
            .includes(searchedValue.toLowerCase())
        );
        if (region === 'All') {
          settingData(data);
        } else if (region === 'Americas') {
          const filteredData = data.filter(
            (country: ICountry) => country.region === 'Americas'
          );
          settingData(filteredData);
        } else if (region === 'Europe') {
          const filteredData = data.filter(
            (country: ICountry) => country.region === 'Europe'
          );
          settingData(filteredData);
        } else if (region === 'Asia') {
          const filteredData = data.filter(
            (country: ICountry) => country.region === 'Asia'
          );
          settingData(filteredData);
        } else if (region === 'Africa') {
          const filteredData = data.filter(
            (country: ICountry) => country.region === 'Africa'
          );
          settingData(filteredData);
        } else if (region === 'Oceania') {
          const filteredData = data.filter(
            (country: ICountry) => country.region === 'Oceania'
          );
          settingData(filteredData);
        } else if (region === 'Antarctic') {
          const filteredData = data.filter(
            (country: ICountry) => country.region === 'Antarctic'
          );
          settingData(filteredData);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [region, sortedState, searchedValue]);

  return {
    data,
    isLoading,
    error,
  };
};
