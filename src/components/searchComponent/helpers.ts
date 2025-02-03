export const fetchRequest = async (searchParams: string) => {
  const response = await fetch(
    'https://swapi.dev/api/people/?search=' + searchParams,
  );
  const data = await response.json();
  return data.results;
};
