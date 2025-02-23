import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';

import { Loader } from '../Loader';
import { DetailsFetchResultInterface } from '../../types/types';
import { fetchRequest } from '../../helpers/helpers';
export const Details: React.FC = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [data, setData] = useState<Array<DetailsFetchResultInterface>>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetchRequest(params.detailId || '', 1)
      .then((data) => {
        setData(data.results);
        console.log('data', data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.detailId]);

  if (loading) {
    return <Loader width={200} />;
  }

  const handleCloseDetails = () => {
    navigate({ pathname: '/', search: searchParams.toString() });
    console.log(window.location.href);
  };

  return (
    <>
      {data && (
        <div className={style.details__open}>
          <div>
            <b> name: </b> {data[0].name}
          </div>
          <div>
            <b> height: </b> {data[0].height}
          </div>
          <div>
            <b> mass: </b> {data[0].mass}
          </div>
          <div>
            <b> hairColor: </b> {data[0].hairColor}
          </div>
          <div>
            <b> skinColor: </b> {data[0].skinColor}
          </div>
          <div>
            <b> eyeColor: </b> {data[0].eyeColor}
          </div>
          <div>
            <b> birthYear: </b> {data[0].birthYear}
          </div>
          <div>
            <b> gender: </b> {data[0].gender}
          </div>
          <div>
            <b> home World: </b> <a href={data[0].homeWorld}>link</a>
          </div>

          <div>
            <b> created:</b> {data[0].created}
          </div>
          <div>
            <b>edited: </b> {data[0].edited}
          </div>
          <button
            data-testid="close-button"
            className={style.close}
            onClick={handleCloseDetails}
          >
            x
          </button>
        </div>
      )}
    </>
  );
};
