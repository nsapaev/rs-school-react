import './style.css';
import { SearchComponent } from '../SearchComponent';
import { CallError } from '../CallError';
import ChangeTheme from '../ChangeTheme';

const Header = () => {
  return (
    <header>
      <SearchComponent />
      <ChangeTheme />
      <CallError />
    </header>
  );
};

export { Header };
