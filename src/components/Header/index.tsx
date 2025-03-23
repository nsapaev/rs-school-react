import { Search } from '../Search';
import { FilterForRegion } from '../FilterForRegion';
import { SortCountriesByName } from '../SortCountriesByName';
import { ClearFilters } from '../ClearFilters';
import './styles.scss';

const Header = () => {
  return (
    <header>
      <Search />
      <FilterForRegion />
      <SortCountriesByName />
      <ClearFilters />
    </header>
  );
};

export { Header };
