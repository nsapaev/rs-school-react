export interface DataInterface {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: Array<string>;
  species: Array<string>;
  vehicles: Array<string>;
  starships: Array<string>;
  created: string;
  edited: string;
  url: string;
}

export interface DetailsFetchResultInterface {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export interface DataListInterface {
  name: string;
  birth_year: string;
  gender: string;
  height: string;
  hair_color: string;
  eye_color: string;
}

export interface FetchDataInterface {
  count: number;
  result: Array<DataListInterface>;
}
