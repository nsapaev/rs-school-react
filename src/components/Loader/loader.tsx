import React from 'react';
import S from './loader.module.css';
import GearSvg from '../../assets/Gear@1x-0.2s-200px-200px.svg';

export class Loader extends React.Component {
  render() {
    return (
      <div
        style={{
          width: '900px',
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
  }
}
