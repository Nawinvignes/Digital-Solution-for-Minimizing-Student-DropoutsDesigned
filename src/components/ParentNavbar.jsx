import React, { useState } from 'react';
import '../Styles/ParentNavbar.css';
import { Link } from 'react-router-dom';

const ParentNavbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`parent-navbar ${isActive ? 'active' : ''}`}>
      <div className="parent-navbar-container">
        <div className="parent-navbar-logo">
          <Link to="/parent-dashboard">Parent Panel</Link>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          {isActive ? (
            <span className="close-icon">&times;</span>
          ) : (
            <>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </>
          )}
        </div>
        <ul className={`parent-navbar-links ${isActive ? 'show' : ''}`}>
          <li><Link to="/parent-dashboard">Dashboard</Link></li>
          <li><Link to="/student-progress">Student Progress</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default ParentNavbar;
