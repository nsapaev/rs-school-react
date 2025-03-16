import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import store from './state/store.ts';
import App from './App.tsx';
import { ReactHookForm } from './pages/react-hook-form/index.tsx';
import { UncontrolledForm } from './pages/uncontrolledForm-form/index.tsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/react-hook-form', element: <ReactHookForm /> },
  { path: '/uncontrolled-form', element: <UncontrolledForm /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
