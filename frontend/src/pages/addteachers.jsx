import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";

const TeacherRegister = () => {
  const [teacher, setTeacher] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const handleChange = (e) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered Teacher:", teacher);
    // You can add your Firebase/Backend logic here
  };

  return (
    <div
      className="min-vh-100"
      style={{
        width: "100vw",
        backgroundColor: "#f8f9fa",
        padding: "2rem",
      }}
    >
      <div
        className="p-4 rounded-4 shadow-lg mx-auto"
        style={{
          backgroundColor: "#ffffff",
          maxWidth: "600px",
        }}
      >
        <h3 className="fw-bold text-primary mb-4 text-center">Register Teacher</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label className="fw-semibold">Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={teacher.name}
              onChange={handleChange}
              placeholder="Enter full name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className="fw-semibold">Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={teacher.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formSubject">
            <Form.Label className="fw-semibold">Subject</Form.Label>
            <Form.Control
              type="text"
              name="subject"
              value={teacher.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              required
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit" className="px-4">
              <i className="bi bi-save me-2"></i>
              Register
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default TeacherRegister;
