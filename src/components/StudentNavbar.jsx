import React, { useState } from 'react';
import '../Styles/StudentNavbar.css';
import { Link } from 'react-router-dom';

const StudentNavbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`student-navbar ${isActive ? 'active' : ''}`}>
      <div className="student-navbar-container">
        <div className="student-navbar-logo">
          <Link to="/student-dashboard">Student Panel</Link>
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
        <ul className={`student-navbar-links ${isActive ? 'show' : ''}`}>
          <li><Link to="/student-dashboard">Dashboard</Link></li>
          <li><Link to="/finance">Educational Support</Link></li>
          <li><Link to="/issue-form">IssueForm</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default StudentNavbar;
