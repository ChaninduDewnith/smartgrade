import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-subtitle">Login to your account</p>

        <form className="login-form">
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
  );
};

export default LoginPage;
