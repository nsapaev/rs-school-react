import React from 'react';

export const NotFoundPage: React.FC = () => {
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
      <div>
        <b>404</b>
      </div>
      <div>Page Not Found</div>
    </div>
  );
};
