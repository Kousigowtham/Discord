import React from "react";
import "./Navbar.css";
import AppLogo from "../../Assets/Discard-logo.png";

const Navbar = () => {
  return (
    <header className="head-container">
      <img src={AppLogo} alt="AppLogo" className="logo" />
      <nav className="grid-col-span-4">
        <ul className="nav-list ">
          <li className="nav-item">Download</li>
          <li className="nav-item">Nitro</li>
          <li className="nav-item">Safety</li>
          <li className="nav-item">Support</li>
          <li className="nav-item">Blog</li>
          <li className="nav-item">Careers</li>
        </ul>
      </nav>
      <button className="button">Login</button>
    </header>
  );
};

export default Navbar;
