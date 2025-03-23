import { useEffect, useState } from 'react';
import { useGetCountries } from './hooks';
import { CountryCard } from '../../components/CountryCard';
import './styles.scss';
import { ICountry } from '../../types';

function MainPage() {
  const { data, isLoading, error } = useGetCountries();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error?.message) {
    return <div>{error.message}</div>;
  }
  if (data.length === 0) {
    return <div>No data</div>;
  }

  return (
    <div className="mainPage__wrapper">
      {data.map((country: ICountry) => (
        <CountryCard country={country} key={country.name.common} />
      ))}
    </div>
  );
}

export { MainPage };
