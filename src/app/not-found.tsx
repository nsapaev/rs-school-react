'use client';

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
        <b> 404</b>
      </h1>
      <i>This page can`t find</i>
    </div>
  );
};

export default NotFoundPage;
