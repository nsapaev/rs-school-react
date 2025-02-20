import React, { useContext } from 'react';
import { SearchComponent } from '../SearchComponent';
import { ThemeContext } from '../../contexts/theme-context';
import { CallError } from '../CallError';

import './style.css';

const Header: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  const clickHandler = () => {
    if (themeContext) {
      themeContext.setIsDarkMode(!themeContext.isDarkMode);
    }
  };

  return (
    <header>
      <SearchComponent />
      <button onClick={clickHandler}>
        {themeContext?.isDarkMode ? 'Light mode' : 'Dark mode'}
      </button>
      <CallError />
    </header>
  );
};

export { Header };
