import React from 'react';
import { Link } from 'react-router-dom';
import navLogo from "../../assets/navLogo.png";
import call from "../../assets/call.png";
import Navigation from './Navigation';
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
        <div className='navtitle'>
        <img src={navLogo} alt="Logo" className='navLogo'/>
        <span className='navName'>
            <Link to="/Home">BISTRO BLISS</Link>
        </span>
      </div>
    <Navigation/>
    <a href="tel:+(414)8570107" className='pnumberbtn' ><img src={call} alt='callicon' className='callicon'/> (414) 857 - 0107</a>
    </nav>
  );
}

export default Navbar;