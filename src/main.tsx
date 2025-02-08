import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary/index.tsx';
import { FallBack } from './components/FallBack/index.tsx';
import { BrowserRouter, Routes, Route } from 'react-router';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary fallback={<FallBack />}>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
