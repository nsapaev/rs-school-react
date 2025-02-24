import { useState } from 'react';

export const useLocalStorage = (): [
  string,
  (key: string, newValue: string) => void,
] => {
  const [value, setValue] = useState<string>(
    localStorage.getItem('search') || ''
  );

  const setLocalStorage = (key: string, newValue: string) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return [value, setLocalStorage];
};
