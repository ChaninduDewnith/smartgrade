import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const response = await fetch("http://localhost:5000/api/teachers/login", {
        method: "POST",  // ✅ use POST, not GET
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),  // ✅ send email & password in body
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate("/studentdashboard");
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Error connecting to server");
    }
  };

  return (
    <div className="page-wrapper">
      <div className="login-container">
        <div className="login-box">
          <h2 className="login-title">Welcome Back 👋</h2>
          <p className="login-subtitle">Login to your account</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" placeholder="you@example.com" required />

            <label>Password</label>
            <input type="password" placeholder="••••••••" required />

            <div className="login-options">
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>

            <button type="submit" className="login-btn">Login</button>

            <p className="register-text">
              Don’t have an account? <a href="#">Register</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
