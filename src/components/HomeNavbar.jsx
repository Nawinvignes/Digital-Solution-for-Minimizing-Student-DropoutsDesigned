import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/HomeNavbar.css';

const HomeNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Hook to get the current location

  // Toggle menu function
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when the route changes
  useEffect(() => {
    setMenuOpen(false); // Close menu on route change
  }, [location]);

  // Disable body scroll when the menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);

  return (
    <nav className="home-navbar">
      <div className="home-navbar-container">
        <div className="home-navbar-logo">
          <Link to="/">EduPlatform</Link>
        </div>

        <div className={`home-navbar-links ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/features" onClick={() => setMenuOpen(false)}>Features</Link></li>
            <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
          </ul>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <span className="hamburger">{menuOpen ? '✕' : '☰'}</span>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
