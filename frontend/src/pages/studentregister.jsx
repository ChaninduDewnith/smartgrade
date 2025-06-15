import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const StudentRegister = () => {
  const [teacher, setTeacher] = useState({
    name: "",
    email: "",
    address: "",
    schoolid: "",
    password: "",
  });

  const handleChange = (e) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/students", teacher);
      alert("Teacher registered successfully!");
      setTeacher({ name: "", email: "", subject: "", nic: "", password: "" });
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message || "Unknown error";
      alert("Error: " + errorMsg);
    }
  };

  return (
    <div className="min-vh-100" style={{ width: "100vw", backgroundColor: "#f8f9fa", padding: "2rem" }}>
      <div className="p-4 rounded-4 shadow-lg mx-auto" style={{ backgroundColor: "#ffffff", maxWidth: "600px" }}>
        <h3 className="fw-bold text-primary mb-4 text-center">Register Teacher</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" name="name" value={teacher.name} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={teacher.email} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" name="subject" value={teacher.subject} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>NIC</Form.Label>
            <Form.Control type="text" name="nic" value={teacher.nic} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={teacher.password} onChange={handleChange} required />
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
