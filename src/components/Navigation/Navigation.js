import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"


const Navigation = () => {
  return (
    <nav>
      <ul className="navLinks">
        <li className="nav-item">
          <Link to="/Home" className="hlink">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/Menu" className="mlink">Menu</Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="alink">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact" className="clink">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;