import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Login from './pages/Login';
import Register from './pages/Register';
import CoursesList from './pages/CoursesList';
import CourseDetail from './pages/CourseDetail';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import About from './pages/About';
import './App.css';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserProfile(token);
    }
  }, []);

  const fetchUserProfile = async (token) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/profile`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(response.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      localStorage.removeItem('token');
      setIsAuthenticated(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="logo">🎓 Learning with Chanddra</h1>
            <ul className="nav-links">
              <li><a href="/courses">Courses</a></li>
              <li><a href="/about">About Us</a></li>
              {isAuthenticated && (
                <>
                  <li><a href="/dashboard">Dashboard</a></li>
                  <li><a href="/admin">Admin</a></li>
                  <li><a href="/" onClick={() => { handleLogout(); }}>Logout</a></li>
                </>
              )}
              {!isAuthenticated && (
                <>
                  <li><a href="/login">Login</a></li>
                  <li><a href="/register">Register</a></li>
                </>
              )}
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<CoursesList />} />
          <Route path="/courses" element={<CoursesList />} />
          <Route path="/about" element={<About />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} />
          <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard user={user} /> : <Navigate to="/login" />} />
          <Route path="/admin" element={isAuthenticated ? <AdminPanel user={user} /> : <Navigate to="/login" />} />
        </Routes>

        <footer className="footer">
          <p>&copy; 2024 Learning with Chanddra. All rights reserved.</p>
          <p>Master Japanese N5 with Expert Instruction</p>
          <p>Payment: Paytm UPI - 7007337763@paytm</p>
          <div className="social-links">
            <p>Follow Us:</p>
            <a href="https://instagram.com/chanddramohansinghsisodiya" target="_blank" rel="noopener noreferrer" className="social-link">📷 Instagram</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
