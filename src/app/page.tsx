import type { Metadata } from 'next';

import MainPage from '../modules/Main/Main';
import { Details } from '../components/Details';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js ',
};

const App = () => {
  return (
    <div className="main-page">
      <MainPage />
      <Details />
    </div>
  );
};

export default App;
