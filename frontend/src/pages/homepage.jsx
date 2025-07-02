import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">School Portal</div>
          <ul className="nav-links">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#programs" className="nav-link">Programs</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
            <li><a href="/login" className="nav-link login-btn">Login</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="center-container">
          <h2 className="hero-heading">
            Welcome to <span className="hero-span">Our School</span>
          </h2>
          <p className="hero-text">
            Empowering students through knowledge, creativity, and growth.
          </p>
          <a href="#enroll" className="enroll-btn">Enroll Now</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="center-container">
          <h3 className="section-title">About Us</h3>
          <p>We are committed to academic excellence and innovation in learning.</p>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="section">
        <div className="center-container">
          <h3 className="section-title">Our Programs</h3>
          <div className="program-grid">
            <div className="program-card">
              <h4 style={{ color: "#2563eb", marginBottom: "0.5rem" }}>Primary Education</h4>
              <p>Engaging curriculum for early learners from Grade 1–5.</p>
            </div>
            <div className="program-card">
              <h4 style={{ color: "#2563eb", marginBottom: "0.5rem" }}>Secondary Education</h4>
              <p>Comprehensive academic and extracurricular development.</p>
            </div>
            <div className="program-card">
              <h4 style={{ color: "#2563eb", marginBottom: "0.5rem" }}>ICT & Innovation</h4>
              <p>Digital learning and problem-solving for 21st-century skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="center-container">
          <h3 className="section-title">Contact Us</h3>
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
