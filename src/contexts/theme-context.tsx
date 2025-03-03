'use client';

import React, { createContext, useEffect, useState } from 'react';

export interface ThemeContextInterface {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextInterface | undefined>(
  undefined
);

const WrapperThemeContext = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    setIsDarkMode(
      localStorage.getItem('isDarkMode')
        ? JSON.parse(String(localStorage.getItem('isDarkMode')))
        : false
    );
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div data-theme={isDarkMode ? 'dark-mode' : 'light-mode'}>{children}</div>
    </ThemeContext.Provider>
  );
};

export { WrapperThemeContext, ThemeContext };
