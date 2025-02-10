import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary/index.tsx';
import { FallBack } from './components/FallBack/index.tsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import { NotFoundPage } from './Pages/NotFoundPage/index.tsx';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary fallback={<FallBack />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
