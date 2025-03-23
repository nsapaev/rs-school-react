import './styles.scss';
import { ICountry } from '../../types';

const CountryCard = ({ country }: { country: ICountry }) => {
  return (
    <div className="container">
      <div className="name">{country.name.common}</div>
      <div className="flag">{country.flag}</div>
      <div className="population">
        population: <b>{country.population.toLocaleString('ru-RU')}</b>
      </div>
      <div className="region">
        region: <b>{country.region}</b>
      </div>
    </div>
  );
};

export { CountryCard };
