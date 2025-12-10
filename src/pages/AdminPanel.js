import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

function AdminPanel({ user }) {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    instructor: ''
  });
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [videoTitle, setVideoTitle] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfTitle, setPdfTitle] = useState('');
  const [message, setMessage] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/courses/all`);
      setCourses(response.data.courses);
    } catch (error) {
      setMessage('Failed to fetch courses');
    }
  };

  const handleCreateCourse = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_BASE_URL}/courses/create`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('Course created successfully!');
      setFormData({ title: '', description: '', instructor: '' });
      fetchCourses();
    } catch (error) {
      setMessage('Failed to create course: ' + error.response?.data?.message);
    }
  };

  const handleUploadVideo = async (e) => {
    e.preventDefault();
    if (!videoFile || !selectedCourseId || !videoTitle) {
      setMessage('Please select course, video file, and title');
      return;
    }

    const formDataVideo = new FormData();
    formDataVideo.append('video', videoFile);
    formDataVideo.append('courseId', selectedCourseId);
    formDataVideo.append('videoTitle', videoTitle);

    try {
      await axios.post(
        `${API_BASE_URL}/courses/upload-video`,
        formDataVideo,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      setMessage('Video uploaded successfully!');
      setVideoFile(null);
      setVideoTitle('');
      fetchCourses();
    } catch (error) {
      setMessage('Failed to upload video: ' + error.response?.data?.message);
    }
  };

  const handleUploadPDF = async (e) => {
    e.preventDefault();
    if (!pdfFile || !selectedCourseId || !pdfTitle) {
      setMessage('Please select course, PDF file, and title');
      return;
    }

    const formDataPDF = new FormData();
    formDataPDF.append('pdf', pdfFile);
    formDataPDF.append('courseId', selectedCourseId);
    formDataPDF.append('pdfTitle', pdfTitle);

    try {
      await axios.post(
        `${API_BASE_URL}/courses/upload-pdf`,
        formDataPDF,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      setMessage('PDF uploaded successfully!');
      setPdfFile(null);
      setPdfTitle('');
      fetchCourses();
    } catch (error) {
      setMessage('Failed to upload PDF: ' + error.response?.data?.message);
    }
  };

  return (
    <main>
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Admin Panel - Manage Courses</h1>
        </div>

        {message && (
          <div className={`alert ${message.includes('Failed') ? 'alert-error' : 'alert-success'}`}>
            {message}
          </div>
        )}

        {/* Create Course */}
        <div className="dashboard-section">
          <h3 className="section-title">Create New Course</h3>
          <form onSubmit={handleCreateCourse} style={{ maxWidth: '500px' }}>
            <div className="form-group">
              <label>Course Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label>Instructor</label>
              <input
                type="text"
                value={formData.instructor}
                onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn">Create Course</button>
          </form>
        </div>

        {/* Upload Video */}
        <div className="dashboard-section">
          <h3 className="section-title">Upload Video</h3>
          <form onSubmit={handleUploadVideo} style={{ maxWidth: '500px' }}>
            <div className="form-group">
              <label>Select Course</label>
              <select
                value={selectedCourseId}
                onChange={(e) => setSelectedCourseId(e.target.value)}
                required
              >
                <option value="">Select a course</option>
                {courses.map(course => (
                  <option key={course._id} value={course._id}>{course.title}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Video Title</label>
              <input
                type="text"
                value={videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Select Video File</label>
              <input
                type="file"
                accept="video/*"
                onChange={(e) => setVideoFile(e.target.files[0])}
                required
              />
            </div>
            <button type="submit" className="btn">Upload Video</button>
          </form>
        </div>

        {/* Upload PDF */}
        <div className="dashboard-section">
          <h3 className="section-title">Upload PDF Materials</h3>
          <form onSubmit={handleUploadPDF} style={{ maxWidth: '500px' }}>
            <div className="form-group">
              <label>Select Course</label>
              <select
                value={selectedCourseId}
                onChange={(e) => setSelectedCourseId(e.target.value)}
                required
              >
                <option value="">Select a course</option>
                {courses.map(course => (
                  <option key={course._id} value={course._id}>{course.title}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>PDF Title</label>
              <input
                type="text"
                value={pdfTitle}
                onChange={(e) => setPdfTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Select PDF File</label>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => setPdfFile(e.target.files[0])}
                required
              />
            </div>
            <button type="submit" className="btn">Upload PDF</button>
          </form>
        </div>

        {/* Courses Overview */}
        <div className="dashboard-section">
          <h3 className="section-title">All Courses</h3>
          <div className="courses-container">
            {courses.map(course => (
              <div key={course._id} className="course-card">
                <div className="course-header">
                  <h3>{course.title}</h3>
                </div>
                <div className="course-content">
                  <p><strong>Instructor:</strong> {course.instructor}</p>
                  <p><strong>Price:</strong> ₹{course.price}</p>
                  <p>📹 {course.totalVideos} Videos</p>
                  <p>📄 {course.totalPdfs} PDFs</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Information */}
        <div className="dashboard-section" style={{ background: '#f9f9f9', padding: '1.5rem', borderRadius: '4px' }}>
          <h3 className="section-title">Payment Information</h3>
          <p><strong>Paytm UPI:</strong> 7007337763@paytm</p>
          <p><strong>Course Price:</strong> ₹1300</p>
          <p><strong>Setup:</strong> Update Paytm credentials in backend .env file for live payments</p>
        </div>

        {/* Social Media */}
        <div className="dashboard-section" style={{ background: '#f0f0ff', padding: '1.5rem', borderRadius: '4px' }}>
          <h3 className="section-title">Social Media</h3>
          <p><strong>Instagram:</strong> <a href="https://instagram.com/chanddramohansinghsisodiya" target="_blank" rel="noopener noreferrer" style={{color: '#667eea', textDecoration: 'none'}}>@chanddramohansinghsisodiya</a></p>
          <p>Share your courses and connect with students on Instagram!</p>
        </div>
      </div>
    </main>
  );
}

export default AdminPanel;
