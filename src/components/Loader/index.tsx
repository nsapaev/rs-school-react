import React from 'react';
import Tube from '../../assets/tube-spinner.svg';
import Image from 'next/image';

interface LoaderInterface {
  width?: number;
  height?: number;
}

export const Loader: React.FC<LoaderInterface> = ({
  width = 900,
  height = 500,
}) => {
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
      <Image src={Tube} alt="Loading..." width={width} height={height} />
    </div>
  );
};
