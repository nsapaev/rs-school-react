import { IoIosArrowRoundDown } from 'react-icons/io';
import { setSortedState } from '../../features/countries-slice';
import './styles.scss';
import { useAppDispatch, useAppSelector } from '../../state/hooks';

const SortCountriesByName = () => {
  const dispatch = useAppDispatch();
  const sortState = useAppSelector((state) => state.countries.sortedState);

  const handleClick = () => {
    if (sortState === 'without') {
      dispatch(setSortedState('desc'));
    } else if (sortState === 'desc') {
      dispatch(setSortedState('asc'));
    } else {
      dispatch(setSortedState('without'));
    }
  };

  return (
    <div>
      <button onClick={handleClick}>
        Sort by name
        {sortState === 'without' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <IoIosArrowRoundDown
              style={{
                transform: 'rotate(-90deg)',
                fontSize: '20px',
                lineHeight: '15px',
                position: 'relative',
                top: '6px',
              }}
            />
            <IoIosArrowRoundDown
              style={{
                transform: 'rotate(90deg)',
                fontSize: '20px',
                position: 'relative',
                top: '-6px',
              }}
            />
          </div>
        )}
        {sortState === 'desc' && (
          <div>
            <IoIosArrowRoundDown
              style={{
                // transform: 'rotate(-90deg)',
                fontSize: '20px',
                lineHeight: '15px',
                position: 'relative',
                top: '2.5px',
              }}
            />
          </div>
        )}
        {sortState === 'asc' && (
          <div>
            <IoIosArrowRoundDown
              style={{
                transform: 'rotate(180deg)',
                fontSize: '20px',
                lineHeight: '15px',
                position: 'relative',
                top: '2.5px',
              }}
            />
          </div>
        )}
      </button>
    </div>
  );
};

export { SortCountriesByName };
