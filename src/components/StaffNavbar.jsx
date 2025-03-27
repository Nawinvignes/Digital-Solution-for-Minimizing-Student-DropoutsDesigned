import React, { useState } from 'react';
import '../Styles/StaffNavbar.css';
import { Link } from 'react-router-dom';

const StaffNavbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`staff-navbar ${isActive ? 'active' : ''}`}>
      <div className="staff-navbar-container">
        <div className="staff-navbar-logo">
          <Link to="/staff-dashboard">Staff Panel</Link>
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
        <ul className={`staff-navbar-links ${isActive ? 'show' : ''}`}>
          <li><Link to="/staff-dashboard">Dashboard</Link></li>
          <li><Link to="/manage-students">Manage Students</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default StaffNavbar;
