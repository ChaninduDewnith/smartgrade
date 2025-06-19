import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const ClassRegister = () => {
  const [classData, setClassData] = useState({
    className: "",
    classTeacher: "",
    gradeLevel: "",
    roomNumber: ""
  });

  const handleChange = (e) => {
    setClassData({ ...classData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your API endpoint
      await axios.post("http://localhost:5000/api/classes", classData);
      alert("Class registered successfully!");
      setClassData({
        className: "",
        classTeacher: "",
        gradeLevel: "",
        roomNumber: ""
      });
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message || "Unknown error";
      alert("Error: " + errorMsg);
    }
  };

  return (
    <div 
      className="d-flex justify-content-center align-items-center min-vh-100" 
      style={{ backgroundColor: "#e9f5ff" }}  // Light blue background
    >
      <div 
        className="p-4 rounded-4 shadow-lg w-100" 
        style={{ maxWidth: "500px", backgroundColor: "#ffffff" }}
      >
        <h3 className="fw-bold text-primary mb-4 text-center">Register New Class</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Class Name</Form.Label>
            <Form.Control 
              type="text" 
              name="className" 
              value={classData.className} 
              onChange={handleChange} 
              placeholder="Enter class name"
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Class Teacher</Form.Label>
            <Form.Control 
              type="text" 
              name="classTeacher" 
              value={classData.classTeacher} 
              onChange={handleChange} 
              placeholder="Enter class teacher"
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Grade Level</Form.Label>
            <Form.Select 
              name="gradeLevel" 
              value={classData.gradeLevel} 
              onChange={handleChange} 
              required
            >
              <option value="">Select grade</option>
              <option value="Grade 1">Grade 1</option>
              <option value="Grade 2">Grade 2</option>
              <option value="Grade 3">Grade 3</option>
              <option value="Grade 4">Grade 4</option>
              <option value="Grade 5">Grade 5</option>
              {/* Add more grades if needed */}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Room Number</Form.Label>
            <Form.Control 
              type="text" 
              name="roomNumber" 
              value={classData.roomNumber} 
              onChange={handleChange} 
              placeholder="Enter room number"
              required 
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit">Register Class</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ClassRegister;
