import { DataInterface, DetailsFetchResultInterface } from '../types/types';

const BASE_URL = 'https://swapi.dev/api/people/';

export const fetchRequest = async (
  searchParams: string,
  currentPage?: number
) => {
  const search = '?search=' + searchParams || '';
  const page = '&page=' + currentPage || '';
  const url = BASE_URL + search + page;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const editData = (
  data: Array<DataInterface>
): Array<DetailsFetchResultInterface> => {
  return data.map((item) => {
    return {
      name: item.name,
      height: item.height,
      mass: item.mass,
      hairColor: item.hair_color,
      skinColor: item.skin_color,
      eyeColor: item.eye_color,
      birthYear: item.birth_year,
      gender: item.gender,
      homeWorld: item.homeworld,
      films: item.films,
      created: item.created,
      edited: item.edited,
    };
  });
};
