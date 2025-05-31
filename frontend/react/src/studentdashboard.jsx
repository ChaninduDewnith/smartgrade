import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";

const StudentDashboard = () => {
  const buttons = [
    {
      label: "View Courses",
      color: "primary",
      icon: "bi-journal-text",
      description: "Access enrolled course materials"
    },
    {
      label: "Submit Assignments",
      color: "info",
      icon: "bi-upload",
      description: "Upload your assignments here"
    },
    {
      label: "Grades for exams",
      color: "success",
      icon: "bi-bar-chart-line",
      description: "View your performance and grades"
    }
  ];

  return (
    <div
      className="min-vh-100 vw-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        paddingTop: "2rem",
        paddingBottom: "2rem"
      }}
    >
      <div className="container">
        <div className="bg-light bg-opacity-85 p-4 p-md-5 rounded-4 shadow-lg" style={{ backdropFilter: "blur(10px)" }}>
          <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
            <div className="d-flex align-items-center">
              <img alt="Logo" width="60" height="60" className="me-3" />
            </div>
            <h1 className="text-center flex-grow-1 fw-bold text-uppercase d-none d-md-block">
              Student Dashboard
            </h1>
            <h1 className="text-center fw-bold text-uppercase d-block d-md-none">
              Student
            </h1>
            <div className="d-flex align-items-center">
              <div className="text-end me-3 d-none d-md-block">
                <h6 className="mb-0">student@email.com</h6>
                <small className="text-muted">Online</small>
              </div>
              <Dropdown align="end">
                <Dropdown.Toggle variant="link" className="d-flex align-items-center">
                  <img
                    alt="User"
                    width="50"
                    height="50"
                    className="rounded-circle border border-3 border-info"
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <div className="row g-4">
            {buttons.map((btn, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <div className={`card h-100 border-${btn.color} shadow-sm`} style={{ transition: "all 0.3s ease" }}>
                  <div className={`card-header bg-${btn.color} bg-opacity-25 text-${btn.color}`}>
                    <div className="d-flex align-items-center">
                      <i className={`${btn.icon} fs-4 me-2`}></i>
                      <h5 className="mb-0">{btn.label}</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="text-muted mb-3 small">{btn.description}</p>
                    <button className={`btn btn-${btn.color} w-100 py-2 fw-semibold rounded-pill`}>
                      <i className={`${btn.icon} me-2`}></i>
                      Go
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-top text-center">
            <p className="text-muted mb-0 small">
              Student Portal • v1.0.0 • © 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
