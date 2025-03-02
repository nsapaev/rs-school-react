import { createContext } from 'react';

export interface ThemeContextInterface {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextInterface | undefined>(
  undefined
);

export { ThemeContext };
