import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/login.css'; // Ensure this path is correct for your project

const Login = () => {
  const [role, setRole] = useState('student'); // Default role is 'student'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // To show error messages
  const [userData, setUserData] = useState([]); // Initialize as an empty array
  const navigate = useNavigate();

  // Fetch user data based on the selected role
  useEffect(() => {
    const fetchUserData = async () => {
      let endpoint = '';

      // Set the endpoint based on the selected role
      if (role === 'staff') {
        endpoint = 'http://localhost:8081/staff/user';
      } else if (role === 'student') {
        endpoint = 'http://localhost:8081/student/user';
      } else if (role === 'parent') {
        endpoint = 'http://localhost:8081/parent/user';
      }

      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error('Failed to fetch user data.');
        }
        const data = await response.json();
        setUserData(data.users || data); // Assuming 'data.users' contains an array of user objects
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to load user data.');
      }
    };

    // Fetch user data whenever the role changes
    fetchUserData();
  }, [role]); // Adding 'role' as a dependency so it refetches when the role changes

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userData.length) { // Check if userData is an empty array
      setError('Loading users data...');
      return;
    }

    // Validate credentials using fetched user data
    const validUser = userData.find(user => user.email === email && user.password === password);

    if (validUser) {
      // Redirect based on role
      if (role === 'student') {
        navigate('/student-dashboard');
      } else if (role === 'parent') {
        navigate('/parent-dashboard');
      } else if (role === 'staff') {
        navigate('/staff-dashboard');
      }
    } else {
      setError('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="parent">Parent</option>
            <option value="staff">Staff</option>
          </select>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>} {/* Display error if exists */}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
