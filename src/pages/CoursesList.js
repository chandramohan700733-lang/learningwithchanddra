import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

function CoursesList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/courses/all`);
      setCourses(response.data.courses);
    } catch (err) {
      setError('Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main>
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading courses...</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <h1 style={{ marginBottom: '2rem', textAlign: 'center', color: '#333' }}>
        Japanese N5 Course - Learning with Chanddra
      </h1>
      {error && <div className="alert alert-error">{error}</div>}
      <div className="courses-container">
        {courses.map(course => (
          <div key={course._id} className="course-card">
            <div className="course-header">
              <h3>{course.level} - {course.title}</h3>
            </div>
            <div className="course-content">
              <p className="course-description">{course.description}</p>
              <p className="course-price">₹{course.price}</p>
              <div className="course-stats">
                <span>📹 {course.totalVideos} Videos</span>
                <span>📄 {course.totalPdfs} PDFs</span>
              </div>
              <a href={`/course/${course._id}`} className="btn">
                View Course
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default CoursesList;
