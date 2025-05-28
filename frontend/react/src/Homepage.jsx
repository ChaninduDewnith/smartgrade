import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">🎓 Sri Sumangala Central College</h1>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        
        <a href="/login" className="login-btn">Login</a>

      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Welcome to <span>Sri Sumangala Central College</span></h2>
          <p>Empowering young minds with knowledge, creativity, and care.</p>
          <a href="#contact" className="enroll-btn">📚 Enroll Now</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h3>🌱 About Us</h3>
        <p>At Sri Sumangala Central College, we focus on holistic development. We believe education should spark curiosity and prepare children for the future with confidence.</p>
      </section>

      {/* Programs Section */}
      <section id="programs" className="programs">
        <h3>🌟 Our Programs</h3>
        <div className="program-grid">
          <div className="program-card">
            <h4>Primary</h4>
            <p>A creative and playful foundation for young learners.</p>
          </div>
          <div className="program-card">
            <h4>Secondary</h4>
            <p>Inspiring curiosity and building essential skills.</p>
          </div>
          <div className="program-card">
            <h4>Clubs</h4>
            <p>Music, arts, sports, leadership, and more.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h3>📞 Contact Us</h3>
        <p>📍 123 galle Rd, Gale</p>
        <p>📞 +94912258620</p>
        <p>📧 info@sumangalacollege.edu</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Sumangala college. Built with ABC for education.
      </footer>
    </div>
  );
};

export default HomePage;
