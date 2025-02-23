import React from 'react';
import { useRouteError } from 'react-router-dom';

interface RouteError {
  data: string;
  internal: boolean;
  status: number;
  statusText: string;
  message: string;
}

export const NotFoundPage: React.FC = () => {
  const error = useRouteError() as RouteError;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '50px',
        minHeight: '100vh',
      }}
    >
      <h1>
        <b>{error?.status} </b>
      </h1>
      <i>{error?.statusText || error?.message}</i>
    </div>
  );
};
