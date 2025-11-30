import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="menu-item menu-icon">
          <FontAwesomeIcon icon={faApple} className="navbar-icon" size="lg"/>
        </span>
        <span className="menu-item">
          <b>Laya's Portfolio</b>
        </span>
        <span className="menu-item">Welcome</span>
        <span className="menu-item">Inspired By</span>
        <span className="menu-item">Source Code</span>
        <span className="menu-item">Help</span>
      </div>
      <div className="navbar-right">
        <span className="menu-item menu-icon">
          <FontAwesomeIcon icon={faVolumeHigh} className="navbar-icon" size="lg"/>
        </span>
        <span className="menu-item">Sat 22 Nov 12:54 PM</span>
      </div>
    </nav>
  );
};

export default Navbar;
