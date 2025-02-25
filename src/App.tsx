import { useState } from 'react';
import style from './App.module.css';

import { ErrorBoundary } from './components/ErrorBoundary';
import { FallBack } from './components/FallBack';
import MainPage from './pages/MainPage';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ThemeContext } from './contexts/theme-context';
import { Flyout } from './components/Flyout';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    localStorage.getItem('isDarkMode')
      ? JSON.parse(String(localStorage.getItem('isDarkMode')))
      : false
  );

  return (
    <ErrorBoundary fallback={<FallBack />}>
      <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <div
          data-theme={isDarkMode ? 'dark-mode' : 'light-mode'}
          className={style.wrapper}
        >
          <Header />
          <MainPage />
          <Flyout />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </ErrorBoundary>
  );
};

export { App };
