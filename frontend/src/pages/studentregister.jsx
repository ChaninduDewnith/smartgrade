import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const StudentRegister = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    address: "",
    regnumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/students", student);
      alert("Student registered successfully!");
      setStudent({ name: "", email: "", address: "", schoolid: "", password: "" });
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message || "Unknown error";
      alert("Error: " + errorMsg);
    }
  };

  return (
    <div className="min-vh-100" style={{ width: "100vw", backgroundColor: "#f8f9fa", padding: "2rem" }}>
      <div className="p-4 rounded-4 shadow-lg mx-auto" style={{ backgroundColor: "#ffffff", maxWidth: "600px" }}>
        <h3 className="fw-bold text-primary mb-4 text-center">Register Student</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" name="name" value={student.name} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={student.email} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name="address" value={student.address} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Registration Number</Form.Label>
            <Form.Control type="text" name="regnumber" value={student.regnumber} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={student.password} onChange={handleChange} required />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit">Register</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default StudentRegister;
