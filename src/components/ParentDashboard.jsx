import React from 'react';
import '../Styles/dashboard.css';

const ParentDashboard = () => {
  return (
    <div className="dashboard">
      <h2>Parent Dashboard</h2>
      <div className="dashboard-section">
        <h3>Child's Attendance</h3>
        <p>80% attendance this month.</p>
      </div>
      <div className="dashboard-section">
        <h3>Child's Performance</h3>
        <p>Grade: B+</p>
      </div>
      <div className="dashboard-section">
        <h3>Alerts</h3>
        <p>No alerts at the moment.</p>
      </div>
    </div>
  );
};

export default ParentDashboard;
