import React from 'react';
import Tube from '../../assets/tube-spinner.svg';

interface LoaderInterface {
  width?: number;
}

export const Loader: React.FC<LoaderInterface> = ({ width = 900 }) => {
  return (
    <div
      data-testid="loader"
      className="Loader"
      style={{
        width: width + 'px',
        height: '500px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img src={Tube} alt="" />
    </div>
  );
};
