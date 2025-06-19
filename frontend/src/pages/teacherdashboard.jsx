import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TeacherDashboard = () => {
  const navigate = useNavigate();

  const buttons = [
    {
      label: "Manage Students",
      color: "primary",
      icon: "bi-person-badge-fill",
      description: "Add, update, or remove teacher profiles",
      onClick: () => navigate("/managestudents"),
    },
    {
      label: "Register Students",
      color: "warning",
      icon: "bi-book-half",
      description: "Create or edit course details",
      onClick: () => navigate("/studentregister"),
    },
    {
      label: "",
      color: "success",
      icon: "bi-bar-chart-line-fill",
      description: "",
      onClick: () => navigate("/view-reports"),
    },
  ];

  return (
    <div
      className="min-vh-100 vw-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "#f8f9fa",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="container">
        <div
          className="p-4 p-md-5 rounded-4 shadow-lg"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
            <div className="d-flex align-items-center">
              <img
                alt="Logo"
                width="60"
                height="60"
                src="/logo192.png" // Placeholder, replace with actual logo
                className="me-3"
              />
            </div>
            <h1 className="text-center flex-grow-1 fw-bold text-uppercase d-none d-md-block">
              Admin Dashboard
            </h1>
            <h1 className="text-center fw-bold text-uppercase d-block d-md-none">
              Admin
            </h1>
            <div className="d-flex align-items-center">
              <div className="text-end me-3 d-none d-md-block">
                <h6 className="mb-0">admin@email.com</h6>
                <small className="text-muted">Online</small>
              </div>
              <Dropdown align="end">
                <Dropdown.Toggle variant="link" className="d-flex align-items-center">
                  <img
                    alt="Admin"
                    width="50"
                    height="50"
                    src="/admin-avatar.png" // Placeholder, replace with actual avatar
                    className="rounded-circle border border-3 border-warning"
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => navigate("/login")}>
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          {/* Cards */}
          <div className="row g-4">
            {buttons.map((btn, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <div
                  className={`card h-100 border-${btn.color} shadow-sm`}
                  style={{ transition: "all 0.3s ease" }}
                >
                  <div
                    className={`card-header bg-${btn.color} bg-opacity-25 text-${btn.color}`}
                  >
                    <div className="d-flex align-items-center">
                      <i className={`${btn.icon} fs-4 me-2`}></i>
                      <h5 className="mb-0">{btn.label}</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="text-muted mb-3 small">{btn.description}</p>
                    <button
                      className={`btn btn-${btn.color} w-100 py-2 fw-semibold rounded-pill`}
                      onClick={btn.onClick}
                    >
                      <i className={`${btn.icon} me-2`}></i>
                      Manage
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-4 pt-3 border-top text-center">
            <p className="text-muted mb-0 small">
              Admin Panel • v1.0.0 • © 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
