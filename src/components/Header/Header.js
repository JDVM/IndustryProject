import React from 'react';
import './Header.scss';
import applogo from '../icons/app-logo.jpeg';



function Header() {
  return (
    <div className="header">
      <div class="logo">
      <img src={applogo} alt='app logo' />
      </div>
    </div>
  );
}

export default Header;
