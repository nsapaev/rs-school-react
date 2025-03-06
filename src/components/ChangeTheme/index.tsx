'use client';

import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';

const ChangeTheme = () => {
  const themeContext = useContext(ThemeContext);

  const clickHandler = () => {
    if (themeContext) {
      localStorage.setItem('isDarkMode', String(!themeContext.isDarkMode));
      themeContext.setIsDarkMode(!themeContext.isDarkMode);
    }
  };
  return (
    <button onClick={clickHandler}>
      {themeContext?.isDarkMode ? 'Light mode' : 'Dark mode'}
    </button>
  );
};

export default ChangeTheme;
