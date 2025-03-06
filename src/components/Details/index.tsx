'use client';
import { useRouter, useSearchParams } from 'next/navigation';

import style from './style.module.css';
import { Loader } from '../Loader';
import { useFetchPeopleQuery } from '../../api/people-api-slice';

export const Details: React.FC = () => {
  const { push } = useRouter();
  const detailsParams = useSearchParams().get('details');
  const searchParams = useSearchParams().get('search');

  const { data, isFetching, isError, error } = useFetchPeopleQuery({
    page: 1,
    search: String(detailsParams),
  });

  const handleCloseDetails = () => {
    push(`/${searchParams ? `?search=${searchParams}` : ''}`);
  };

  if (isError) {
    return <>{error}</>;
  }

  if (isFetching) {
    return <Loader width={200} />;
  }

  return (
    <div data-testid="details-wrapper-testid">
      {!!data?.results.length && (
        <div className={style.details__open}>
          <div>
            <b> name: </b> {data.results[0].name}
          </div>
          <div>
            <b> height: </b> {data.results[0].height}
          </div>
          <div>
            <b> mass: </b> {data.results[0].mass}
          </div>
          <div>
            <b> hairColor: </b> {data.results[0].hair_color}
          </div>
          <div>
            <b> skinColor: </b> {data.results[0].skin_color}
          </div>
          <div>
            <b> eyeColor: </b> {data.results[0].eye_color}
          </div>
          <div>
            <b> birthYear: </b> {data.results[0].birth_year}
          </div>
          <div>
            <b> gender: </b> {data.results[0].gender}
          </div>

          <button
            data-testid="close-details-button-testid"
            className={style.close}
            onClick={handleCloseDetails}
          >
            x
          </button>
        </div>
      )}
    </div>
  );
};
