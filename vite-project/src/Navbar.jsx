import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeIcon = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <h1 id="website_name">
          <Link to="/" className="title">tEaMB</Link>
        </h1>
        <div className="nav_middle_links">
          <Link to="/about" className="link">About</Link>
          <Link to="/contact" className="link">Contact</Link>
          <Link to="/services" className="link">Services</Link>
        </div>
        <div className="buttons">
          <button id="loginBtn">Login</button>
          <img 
            src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-24-128.png" 
            id="menu_icon"
            onClick={toggleMenu}
            alt="menu icon"
          />
        </div>      
      </nav>
      {isMenuOpen && (
        <div className="nav_middle_links_div">
          <span className="material-symbols-outlined" id="close_icon" 
            onClick={closeIcon}>
            close
          </span>
          <Link to="/help" className="side_link">Help</Link>
          <Link to="/about" className="side_link">About</Link>
          <Link to="/blogs" className="side_link">Blogs</Link> 
          <Link to="/contact" className="side_link">Contact</Link>                    
          <Link to="/services" className="side_link">Services</Link>
          <Link to="/donate" className="side_link">Donate Us</Link>
        </div>
      )}
    </>
  );
}

export default Navbar;