import { setClearFilters } from '../../features/countries-slice';
import { useAppDispatch } from '../../state/hooks';

const ClearFilters = () => {
  const dispatch = useAppDispatch();

  const clickHandler = () => dispatch(setClearFilters());
  return <button onClick={clickHandler}>Clear Filters</button>;
};

export { ClearFilters };
