import { DetailsFetchResultInterface } from '../../../types/types';

export const character: DetailsFetchResultInterface = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hairColor: 'Blond',
  skinColor: 'Fair',
  eyeColor: 'Blue',
  birthYear: '19BBY',
  gender: 'Male',
  homeWorld: 'https://swapi.dev/api/planets/1/',
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
  ],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
};
