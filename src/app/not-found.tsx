import React from 'react';

const NotFoundPage = () => {
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
        <b> 404 </b>
      </h1>
      <i>Page: Not Found</i>
    </div>
  );
};

export default NotFoundPage;
