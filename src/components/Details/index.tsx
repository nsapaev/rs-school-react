import React from 'react';
import style from './style.module.css';
import { useSearchParams } from 'react-router-dom';

import { Loader } from '../Loader';
import { DetailsFetchResultInterface } from '../../types/types';

interface DetailsInterface {
  data: DetailsFetchResultInterface | null;
  isLoading: boolean;
}

export const Details: React.FC<DetailsInterface> = ({ data, isLoading }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const details = searchParams.get('details');

  const removeDetails = () => {
    searchParams.delete('details');
    setSearchParams(searchParams);
  };

  return (
    <>
      {data && !isLoading && details ? (
        <div className={style.details__open}>
          <div>
            <b> name: </b> {data.name}
          </div>
          <div>
            <b> height: </b> {data.height}
          </div>
          <div>
            <b> mass: </b> {data.mass}
          </div>
          <div>
            <b> hairColor: </b> {data.hairColor}
          </div>
          <div>
            <b> skinColor: </b> {data.skinColor}
          </div>
          <div>
            <b> eyeColor: </b> {data.eyeColor}
          </div>
          <div>
            <b> birthYear: </b> {data.birthYear}
          </div>
          <div>
            <b> gender: </b> {data.gender}
          </div>
          <div>
            <b> home World: </b> <a href={data.homeWorld}>link</a>
          </div>
          <div>
            {data.films.map((i: string, index) => {
              return (
                <div key={index}>
                  <b> films: </b>
                  <a href={i}>link</a>
                </div>
              );
            })}
          </div>
          <div>
            <b> created:</b> {data.created}
          </div>
          <div>
            <b>edited: </b> {data.edited}
          </div>
          <button className={style.close} onClick={removeDetails}>
            x
          </button>
        </div>
      ) : (
        <Loader width={500} />
      )}
    </>
  );
};
