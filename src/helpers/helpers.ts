const BASE_URL = 'https://swapi.dev/api/people/';

export const fetchRequest = async (
  searchParams: string,
  currentPage: number
) => {
  const search = '?search=' + searchParams || '';
  const page = '&page=' + currentPage;
  const url = BASE_URL + search + page;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
