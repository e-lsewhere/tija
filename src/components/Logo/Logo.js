import React from 'react';
import logo from './Tija-Full.png';
import './Logo.css';

const Logo = () => {
  return(
    <div className='container'>
      <div className='row'>
        <div className='col d-flex justify-content-center'>
          <img src={logo} className='logo mt2 ml4 mb3' alt='Colorful Hourglass Logo' />
        </div>
      </div>
    </div>
  );
}

export default Logo;
