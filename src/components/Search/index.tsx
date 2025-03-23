import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../state/hooks';
import { setSearchValue } from '../../features/countries-slice';
import { useDebounce } from './hooks';

const Search = () => {
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();
  const debouncedSearch = useDebounce(search);
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(setSearchValue(debouncedSearch));
  }, [debouncedSearch, dispatch]);

  return (
    <>
      <input
        value={search}
        onChange={handleChange}
        type="text"
        placeholder="Search"
      ></input>
    </>
  );
};

export { Search };
