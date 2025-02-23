import { ErrorBoundary } from './components/ErrorBoundary';
import { FallBack } from './components/FallBack';
import MainPage from './pages/MainPage';

const App: React.FC = () => (
  <ErrorBoundary fallback={<FallBack />}>
    <MainPage />
  </ErrorBoundary>
);

export { App };
