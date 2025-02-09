import React from 'react';
import GearSvg from '../../assets/Gear@1x-0.2s-200px-200px.svg';

interface LoaderInterface {
  width?: number;
}

export const Loader: React.FC<LoaderInterface> = ({ width = 900 }) => {
  return (
    <div
      style={{
        width: width + 'px',
        height: '500px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img src={GearSvg} alt="" />
    </div>
  );
};
