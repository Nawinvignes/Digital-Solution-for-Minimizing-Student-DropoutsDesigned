import React from 'react';
import StudentDashboard from './StudentDashboard';
import ParentDashboard from './ParentDashboard';
import StaffDashboard from './StaffDashboard';

const Dashboard = ({ role }) => {
  return (
    <div>
      {role === 'student' && <StudentDashboard />}
      {role === 'parent' && <ParentDashboard />}
      {role === 'staff' && <StaffDashboard />}
    </div>
  );
};

export default Dashboard;
