import React from 'react';

function About() {
  return (
    <main>
      <div className="about-container">
        <h1 style={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
          About Us
        </h1>

        <div className="about-content">
          <div className="instructor-profile">
            <div className="instructor-image">
              <div className="placeholder-image">
                📸
              </div>
              <p style={{ textAlign: 'center', marginTop: '1rem', color: '#666' }}>
                Your Photo Here
              </p>
            </div>

            <div className="instructor-info">
              <h2>Chandra Mohan Singh</h2>
              <p className="title">Japanese Language Instructor</p>
              
              <div className="bio">
                <h3>Welcome to My Japanese Course!</h3>
                <p>
                  Hello everyone, my name is Chandra Mohan Singh, and I welcome you to my Japanese course.
                </p>
                <p>
                  In this course, I will be teaching Japanese using <strong>Hindi + English</strong>, so that every learner — 
                  even complete beginners — can easily understand the concepts.
                </p>
                <p>
                  All lessons will be provided through <strong>recorded video sessions</strong>, along with notes, worksheets and 
                  practice material. The entire course is available at a very affordable price, so anyone can start learning 
                  Japanese without any hesitation.
                </p>
              </div>

              <div className="expertise">
                <h3>What We Will Cover</h3>
                <ul>
                  <li>✓ Hiragana & Katakana</li>
                  <li>✓ Basic Kanji</li>
                  <li>✓ Essential Grammar</li>
                  <li>✓ Vocabulary</li>
                  <li>✓ Sentence-Making</li>
                  <li>✓ Listening & Reading Practice</li>
                </ul>
              </div>

              <div className="mission">
                <h3>My Goal</h3>
                <p>
                  My goal is to make Japanese simple, clear, and enjoyable for you.
                </p>
                <p style={{ fontSize: '1.1rem', fontWeight: '500', color: '#667eea', marginTop: '1rem' }}>
                  Let's begin your Japanese learning journey together! 🚀
                </p>
              </div>

              <div className="connect">
                <h3>Connect With Me</h3>
                <a 
                  href="https://instagram.com/chanddramohansinghsisodiya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  📷 Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="course-highlights">
            <h2 style={{ marginBottom: '2rem' }}>Course Highlights</h2>
            
            <div className="highlights-grid">
              <div className="highlight-card">
                <div className="highlight-icon">🎥</div>
                <h4>Video Lectures</h4>
                <p>High-quality video lessons covering all N5 topics</p>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">📚</div>
                <h4>Study Materials</h4>
                <p>Comprehensive notes, worksheets and practice material</p>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">🌍</div>
                <h4>Hindi + English Medium</h4>
                <p>Teaching in Hindi and English for easy understanding</p>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">💰</div>
                <h4>Affordable</h4>
                <p>Premium content at just ₹1300 - lifetime access</p>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">⭐</div>
                <h4>For Beginners</h4>
                <p>Perfect for complete beginners to N5 level</p>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">🔄</div>
                <h4>Lifetime Access</h4>
                <p>Purchase once, learn forever - no subscription needed</p>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">👥</div>
                <h4>Community</h4>
                <p>Join our community of Japanese learners on Instagram</p>
              </div>
            </div>
          </div>

          <div className="why-choose">
            <h2>Why Choose This Course?</h2>
            <div className="reasons">
              <div className="reason-item">
                <span className="number">1</span>
                <h4>Video Lessons</h4>
                <p>Learn through recorded video sessions at your own pace</p>
              </div>

              <div className="reason-item">
                <span className="number">2</span>
                <h4>Hindi + English Teaching</h4>
                <p>Easy to understand for beginners with mother tongue explanation</p>
              </div>

              <div className="reason-item">
                <span className="number">3</span>
                <h4>Complete Learning Materials</h4>
                <p>Videos, notes, worksheets, and practice material included</p>
              </div>

              <div className="reason-item">
                <span className="number">4</span>
                <h4>Affordable & Lifetime Access</h4>
                <p>Only ₹1300 with lifetime access - no recurring charges</p>
              </div>
            </div>
          </div>
        </div>

        <div className="social-links" style={{ textAlign: 'center', marginTop: '3rem', paddingBottom: '2rem' }}>
          <a href="https://instagram.com/chanddramohansinghsisodiya" target="_blank" rel="noopener noreferrer" className="social-btn">
            📱 Follow on Instagram
          </a>
        </div>
      </div>
    </main>
  );
}

export default About;
