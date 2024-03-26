import React from 'react';
import './Components.css';
import FooterLogo from "../assets/FooterLogo.png";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer>
        <div className='footer-section0'>
      <div className='footer-section1'>
        <div className='footertitle'>
        <img src={FooterLogo} alt="footerLogo" className='footerLogo'/>
        <span className='FooterName'>
            <Link to="/Home">BISTRO BLISS</Link>
        </span>
      </div>
      <p className="description">Lorem ipsum dolor sit amet consectetur. Varius congue viverra lorem viverra dui semper arcu lectus nisl. Id tempus et dignissim volutpat lectus dignissim at. Ultrices euismod duis et fringilla gravida.</p>
      </div>
      <div className='footer-section2'>
      <div className="footer-section">
        <h3><Link to= "/Home">Home</Link></h3>
        <ul>
          <li><Link to= "/About">About</Link></li>
          <li><a href="./Home#sertitle">Service</a></li>
          <li><a href="/Menu#mtitle">Price</a></li>
          <li><a href="/Contact">Blog</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3><Link to= "/Menu">Menu</Link></h3>
        <ul>
          <li><Link to= "/Menu">Breakfast</Link></li>
          <li><Link to= "/Menu">Lunch</Link></li>
          <li><Link to= "/Menu">Dessert</Link></li>
          <li><Link to= "/Menu">Dinner</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3><Link to="/Contact">Social Media</Link></h3>
        <ul>
          <li><Link to="/Contact">Facebook</Link></li>
          <li><Link to="/Contact">Instagram</Link></li>
          <li><Link to="/Contact">Twitter</Link></li>
        </ul>
      </div>
      </div>
      </div>
      <div className="Email">
        <input type="email"  className="Emailinput" placeholder="Enter your email" />
        <button className='Subscribe'>Subscribe</button>
      </div>
    </footer>
  );
};

export default Footer;
