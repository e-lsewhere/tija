import React from 'react';
import logo from './logo_icon.png';
import './Logo.css';

const Logo = () => {
  return(
    <div className='container'>
      <h1 className='underline mr5 mt4 float-right' id='title'>tija</h1>
      <img src={logo} className='mt2 ml4' />
    </div>
  );
}

export default Logo;
