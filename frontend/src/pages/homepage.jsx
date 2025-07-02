import React, { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.fontFamily = "Segoe UI, sans-serif";
    document.body.style.background = "#f0f4f8";
    document.body.style.color = "#333";
    document.body.style.overflowX = "hidden"; // Prevent horizontal scroll
  }, []);

  const styles = {
    homepage: {
      width: "100vw",
      minHeight: "100vh",
    },
    navbar: {
      width: "100%",
      background: "linear-gradient(to right, #2563eb, #1e40af)",
      color: "white",
      padding: "1.2rem 0",
    },
    navContent: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 1.5rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logo: {
      fontSize: "1.8rem",
      fontWeight: "700",
    },
    navLinks: {
      listStyle: "none",
      display: "flex",
      gap: "2rem",
      margin: 0,
      padding: 0,
    },
    navLink: {
      color: "white",
      textDecoration: "none",
      fontWeight: "500",
    },
    loginBtn: {
      backgroundColor: "#ffffff",
      color: "#1e3a8a",
      padding: "0.5rem 1rem",
      borderRadius: "6px",
      textDecoration: "none",
      fontWeight: "600",
      marginLeft: "1rem",
    },
    hero: {
      width: "100%",
      background: "radial-gradient(circle at top left, #e0f2fe, #ffffff)",
      padding: "5rem 1rem",
      textAlign: "center",
    },
    centerContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 1.5rem",
    },
    heroHeading: {
      fontSize: "2.5rem",
      marginBottom: "1rem",
      fontWeight: "600",
    },
    heroSpan: {
      color: "#2563eb",
    },
    heroText: {
      fontSize: "1.2rem",
      marginBottom: "2rem",
      color: "#555",
    },
    enrollBtn: {
      backgroundColor: "#2563eb",
      color: "white",
      padding: "0.8rem 1.6rem",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "bold",
    },
    section: {
      width: "100%",
      padding: "4rem 1rem",
      backgroundColor: "white",
      textAlign: "center",
    },
    sectionTitle: {
      fontSize: "2rem",
      color: "#1e3a8a",
      marginBottom: "1rem",
    },
    programGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "2rem",
      marginTop: "2rem",
    },
    programCard: {
      background: "#f9fafb",
      borderRadius: "12px",
      padding: "2rem",
      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    },
    footer: {
      backgroundColor: "#1e3a8a",
      color: "white",
      textAlign: "center",
      padding: "1.2rem 0",
      fontSize: "0.9rem",
      marginTop: "4rem",
    },
  };

  return (
    <div style={styles.homepage}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navContent}>
          <div style={styles.logo}>School Portal</div>
          <ul style={styles.navLinks}>
            <li><a href="#about" style={styles.navLink}>About</a></li>
            <li><a href="#programs" style={styles.navLink}>Programs</a></li>
            <li><a href="#contact" style={styles.navLink}>Contact</a></li>
            <li><a href="/login" style={{ ...styles.navLink, ...styles.loginBtn }}>Login</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.centerContainer}>
          <h2 style={styles.heroHeading}>
            Welcome to <span style={styles.heroSpan}>Our School</span>
          </h2>
          <p style={styles.heroText}>
            Empowering students through knowledge, creativity, and growth.
          </p>
          <a href="#enroll" style={styles.enrollBtn}>Enroll Now</a>
        </div>
      </section>

      {/* About */}
      <section id="about" style={styles.section}>
        <div style={styles.centerContainer}>
          <h3 style={styles.sectionTitle}>About Us</h3>
          <p>We are committed to academic excellence and innovation in learning.</p>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" style={styles.section}>
        <div style={styles.centerContainer}>
          <h3 style={styles.sectionTitle}>Our Programs</h3>
          <div style={styles.programGrid}>
            <div style={styles.programCard}>
              <h4 style={{ color: "#2563eb", marginBottom: "0.5rem" }}>Primary Education</h4>
              <p>Engaging curriculum for early learners from Grade 1–5.</p>
            </div>
            <div style={styles.programCard}>
              <h4 style={{ color: "#2563eb", marginBottom: "0.5rem" }}>Secondary Education</h4>
              <p>Comprehensive academic and extracurricular development.</p>
            </div>
            <div style={styles.programCard}>
              <h4 style={{ color: "#2563eb", marginBottom: "0.5rem" }}>ICT & Innovation</h4>
              <p>Digital learning and problem-solving for 21st-century skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={styles.section}>
        <div style={styles.centerContainer}>
          <h3 style={styles.sectionTitle}>Contact Us</h3>
          <p>Email: contact@ourschool.com | Phone: +94 712345678</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.centerContainer}>
          © 2025 Our School. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
