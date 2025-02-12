import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary/index.tsx';
import { FallBack } from './components/FallBack/index.tsx';
import { NotFoundPage } from './pages/NotFoundPage/index.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Details } from './components/Details/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: 'details/:detailId',
        element: <Details />,
      },
    ],
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
