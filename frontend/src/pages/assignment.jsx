import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Spinner, Alert } from "react-bootstrap";
import axios from "axios";

const AssignmentUpload = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Please select a file to upload.");
      return;
    }

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("assignmentFile", file);

    setLoading(true);
    setMessage("");

    try {
      // Replace with your API endpoint
      await axios.post("http://localhost:5000/api/assignments", data, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setMessage("Assignment uploaded successfully!");
      setFormData({ title: "", description: "" });
      setFile(null);
      e.target.reset();
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message || "Upload failed.";
      setMessage(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{ backgroundColor: "#f0f8ff" }}  // Light blue background
    >
      <div className="p-4 rounded-4 shadow w-100" style={{ maxWidth: "500px", backgroundColor: "#fff" }}>
        <h3 className="fw-bold text-primary mb-4 text-center">Upload Assignment</h3>

        {message && <Alert variant={message.includes("success") ? "success" : "danger"}>{message}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter assignment title"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter assignment description"
              rows={3}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Upload File</Form.Label>
            <Form.Control
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.ppt,.pptx"
              required
            />
            <Form.Text className="text-muted">Accepted formats: PDF, DOCX, PPT</Form.Text>
          </Form.Group>

          <div className="text-center">
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? <Spinner size="sm" animation="border" /> : "Submit Assignment"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AssignmentUpload;
