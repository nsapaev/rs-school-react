import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface PeopleInterface {
  name: string;
  mass: string;
  gender: string;
}

export interface ResponsePeoplesInterface {
  count: number;
  results: PeopleInterface[];
}

interface RequestPeoplesInterface {
  search: string;
  page: number;
}

export const peopleApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://swapi.dev/api',
  }),
  endpoints(builder) {
    return {
      fetchPeople: builder.query<
        ResponsePeoplesInterface,
        RequestPeoplesInterface
      >({
        query({ search = '', page = 1 }) {
          return `/people/?search=${search}&page=${page}`;
        },
      }),
    };
  },
});

export const { useFetchPeopleQuery } = peopleApiSlice;
