import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import ParentDashboard from './components/ParentDashboard';
import StaffDashboard from './components/StaffDashboard';
import Home from './components/Home';
import HomeNavbar from './components/HomeNavbar';
import About from './components/About';
import Features from './components/Features';
import StudentNavbar from './components/StudentNavbar';
import ParentNavbar from './components/ParentNavbar';
import StaffNavbar from './components/StaffNavbar';
import ManageStudents from './components/ManageStudents';
import FinancialSupportChecker from './components/FinancialSupportChecker';
import IssueForm from './components/IssueForm';

const App = () => {
  // Helper function to return correct Navbar based on the route
  const getNavbar = (route) => {
    switch (route) {
      case 'student':
        return <StudentNavbar />;
      case 'parent':
        return <ParentNavbar />;
      case 'staff':
        return <StaffNavbar />;
      default:
        return <HomeNavbar />;
    }
  };

  return (
    <div className="App">
      <Router>
        {/* Main Routes */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<><HomeNavbar/><Home/></>}/>
          <Route path="/about" element={<><HomeNavbar/><About/></>}/>
          <Route path="/features" element={<><HomeNavbar/><Features/></>}/>
          <Route path="/login" element={<><HomeNavbar/><Login/></>} />

          {/* Student Dashboard */}
          <Route path="/student-dashboard" element={<><StudentNavbar/><StudentDashboard/></>} />

          {/* Parent Dashboard */}
          <Route path="/parent-dashboard" element={<><ParentNavbar/><ParentDashboard/></>} />

          {/* Staff Dashboard */}
          <Route path="/staff-dashboard" element={<><StaffNavbar/><StaffDashboard/></>} />
          <Route path='/manage-students'element={<><StaffNavbar/><ManageStudents></ManageStudents></>}></Route>
          <Route path='/issue-form'element={<><StudentNavbar/><IssueForm/></>}></Route>
          <Route path='/finance' element={<><StudentNavbar/><FinancialSupportChecker/></>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
