import { REGIONS } from '../../shareds/constants';
import { setRegion } from '../../features/countries-slice';
import { useAppDispatch, useAppSelector } from '../../state/hooks';

const FilterForRegion = () => {
  const dispatch = useAppDispatch();
  const selectedRegion = useAppSelector((state) => state.countries.region);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setRegion(e.target.value));
  };

  return (
    <select onChange={handleChange} value={selectedRegion}>
      {REGIONS.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export { FilterForRegion };
