import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBundary/index.tsx';
import { FallBack } from './components/FallBack/index.tsx';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ErrorBoundary fallback={<FallBack />}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
