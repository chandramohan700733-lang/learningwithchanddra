import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

function Dashboard({ user }) {
  const [userInfo, setUserInfo] = useState(user);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/profile`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUserInfo(response.data.user);
      
      if (response.data.user.purchasedCourses) {
        setCourses(response.data.user.purchasedCourses);
      }
    } catch (error) {
      console.error('Failed to fetch user data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Welcome, {userInfo?.name}!</h1>
          <p>Email: {userInfo?.email}</p>
        </div>

        <div className="dashboard-section">
          <h3 className="section-title">My Courses</h3>
          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
            </div>
          ) : courses.length > 0 ? (
            <div className="courses-container">
              {courses.map(course => (
                <div key={course._id} className="course-card">
                  <div className="course-header">
                    <h3>{course.title}</h3>
                  </div>
                  <div className="course-content">
                    <p className="course-description">{course.description}</p>
                    <p>📹 {course.totalVideos} Videos</p>
                    <p>📄 {course.totalPdfs} Study Materials</p>
                    <a href={`/course/${course._id}`} className="btn">
                      Continue Learning
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="alert alert-info">
              <p>You haven't purchased any courses yet. <a href="/courses">Browse courses</a></p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
