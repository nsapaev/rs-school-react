interface ICountry {
  name: {
    common: string;
  };
  population: number;
  region: string;
  flag: string;
}

interface ICountries {
  countries: ICountry[];
  region: string;
  sortedState: 'without' | 'asc' | 'desc';
  searchedValue: string;
}

export type { ICountry, ICountries };
