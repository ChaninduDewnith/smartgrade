import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Alert, Spinner, Container } from "react-bootstrap";
import axios from "axios";

const ResultAdd = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    studentName: "",
    subject: "",
    examType: "",
    marks: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await axios.post("http://localhost:5000/api/results", formData);
      setMessage("Result added successfully!");
      setFormData({ studentId: "", studentName: "", subject: "", examType: "", marks: "" });
    } catch (err) {
      setMessage("Error adding result.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="shadow p-4 rounded-4 w-100" style={{ maxWidth: "500px", backgroundColor: "#fff" }}>
        <h4 className="text-center text-primary fw-bold mb-4">Add Student Result</h4>

        {message && <Alert variant={message.includes("success") ? "success" : "danger"}>{message}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Student ID</Form.Label>
            <Form.Control
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              required
              placeholder="Enter student ID"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Student Name</Form.Label>
            <Form.Control
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
              placeholder="Enter student name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Enter subject"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Exam Type</Form.Label>
            <Form.Select name="examType" value={formData.examType} onChange={handleChange} required>
              <option value="">Select exam type</option>
              <option value="Midterm">Midterm</option>
              <option value="Final">Final</option>
              <option value="Quiz">Quiz</option>
              <option value="Assignment">Assignment</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Marks</Form.Label>
            <Form.Control
              type="number"
              name="marks"
              value={formData.marks}
              onChange={handleChange}
              required
              placeholder="Enter marks"
              min="0"
              max="100"
            />
          </Form.Group>

          <div className="text-center">
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? <Spinner size="sm" animation="border" /> : "Submit Result"}
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default ResultAdd;
