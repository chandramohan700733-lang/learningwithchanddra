import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [hasAccess, setHasAccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchCourse();
    if (token) {
      checkAccess();
    }
  }, [id]);

  const fetchCourse = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/courses/${id}`);
      setCourse(response.data.course);
    } catch (err) {
      setError('Failed to fetch course');
    } finally {
      setLoading(false);
    }
  };

  const checkAccess = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/payments/check-access/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setHasAccess(response.data.hasAccess);
    } catch (err) {
      setHasAccess(false);
    }
  };

  const handlePayment = async () => {
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const response = await axios.post(
        `${API_BASE_URL}/payments/initiate`,
        { courseId: id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Redirect to Paytm payment gateway
      // Note: This is a simplified version. Full Paytm integration requires proper setup
      alert('Payment gateway integration required. Please contact support.');
      console.log('Payment Data:', response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Payment failed');
    }
  };

  if (loading) {
    return (
      <main>
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading course...</p>
        </div>
      </main>
    );
  }

  if (!course) {
    return (
      <main>
        <div className="alert alert-error">Course not found</div>
      </main>
    );
  }

  return (
    <main>
      <div className="dashboard-container">
        <h1>{course.title}</h1>
        {error && <div className="alert alert-error">{error}</div>}
        
        <div style={{ marginBottom: '2rem' }}>
          <p><strong>Level:</strong> {course.level}</p>
          <p><strong>Instructor:</strong> {course.instructor}</p>
          <p><strong>Price:</strong> ₹{course.price}</p>
          <p>{course.description}</p>
        </div>

        <div className="dashboard-section">
          <h3 className="section-title">Course Content</h3>
          {hasAccess ? (
            <>
              <div className="dashboard-section">
                <h4>Videos ({course.videos.length})</h4>
                {course.videos.length > 0 ? (
                  <ul style={{ listStyle: 'none' }}>
                    {course.videos.map((video, idx) => (
                      <li key={idx} style={{ 
                        padding: '0.75rem', 
                        background: '#f9f9f9', 
                        marginBottom: '0.5rem',
                        borderRadius: '4px'
                      }}>
                        📹 {video.title}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No videos yet</p>
                )}
              </div>

              <div className="dashboard-section">
                <h4>Study Materials ({course.pdfs.length})</h4>
                {course.pdfs.length > 0 ? (
                  <ul style={{ listStyle: 'none' }}>
                    {course.pdfs.map((pdf, idx) => (
                      <li key={idx} style={{ 
                        padding: '0.75rem', 
                        background: '#f9f9f9', 
                        marginBottom: '0.5rem',
                        borderRadius: '4px'
                      }}>
                        📄 {pdf.title}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No materials yet</p>
                )}
              </div>
            </>
          ) : (
            <div className="alert alert-info">
              <p>Buy this course to access videos and study materials</p>
              <button onClick={handlePayment} className="btn" style={{ marginTop: '1rem' }}>
                Buy Now - ₹{course.price}
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default CourseDetail;
