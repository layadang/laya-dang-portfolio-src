import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="menu-item menu-icon"><img
          src="/icons/apple-logo.ico"
          alt="Apple"
          className="navbar-icon"
          draggable="false"
        /></span>
        <span className="menu-item"><b>Laya's Portfolio</b></span>
        <span className="menu-item">Welcome</span>
        <span className="menu-item">Inspired By</span>
        <span className="menu-item">Source Code</span>
        <span className="menu-item">Help</span>
      </div>
      <div className="navbar-right">
        <span className="menu-item menu-icon"><img
          src="/icons/volume-on.ico"
          alt="Volume"
          className="navbar-icon"
          draggable="false"
        /></span>
        <span className="menu-item">Sat 22 Nov 12:54 PM</span>
      </div>
    </nav>
  );
};

export default Navbar;
