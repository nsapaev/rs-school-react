import { ErrorBoundary } from './components/ErrorBoundary';
import { FallBack } from './components/FallBack';
import MainPage from './pages/MainPage';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<FallBack />}>
      <Header />
      <MainPage />
      <Footer />
    </ErrorBoundary>
  );
};

export { App };
