import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBundary/ErrorBoundery';
import { FallBack } from './components/fallBack/fallBack.tsx';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ErrorBoundary fallback={<FallBack />}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
