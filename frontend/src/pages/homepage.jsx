import React from "react";
import "./index.css"; // or "./App.css"

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">School Portal</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/login" className="login-btn">Login</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="center-container">
          <h2>Welcome to <span>Our School</span></h2>
          <p>Empowering students through knowledge, creativity, and growth.</p>
          <a href="#enroll" className="enroll-btn">Enroll Now</a>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="center-container">
          <h3>About Us</h3>
          <p>We are committed to academic excellence and innovation in learning.</p>
        </div>
      </section>

      {/* Programs */}
      <section className="programs" id="programs">
        <div className="center-container">
          <h3>Our Programs</h3>
          <div className="program-grid">
            <div className="program-card">
              <h4>Primary Education</h4>
              <p>Engaging curriculum for early learners from Grade 1–5.</p>
            </div>
            <div className="program-card">
              <h4>Secondary Education</h4>
              <p>Comprehensive academic and extracurricular development.</p>
            </div>
            <div className="program-card">
              <h4>ICT & Innovation</h4>
              <p>Digital learning and problem-solving for 21st-century skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="center-container">
          <h3>Contact Us</h3>
          <p>Email: contact@ourschool.com | Phone: +94 712345678</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="center-container">
          © 2025 Our School. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
