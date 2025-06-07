import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table } from "react-bootstrap";

const ManageTeachers = () => {
  const teachers = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", subject: "Mathematics" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", subject: "Physics" },
    { id: 3, name: "Emily Johnson", email: "emily.j@example.com", subject: "Chemistry" },
  ];

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
          maxWidth: "100%",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold text-primary m-0">Manage Teachers</h3>
          <Button variant="primary">
            <i className="bi bi-plus-circle me-2"></i>
            Add Teacher
          </Button>
        </div>

        <div className="table-responsive">
          <Table striped bordered hover className="text-center">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher, index) => (
                <tr key={teacher.id}>
                  <td>{index + 1}</td>
                  <td>{teacher.name}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.subject}</td>
                  <td>
                    <Button variant="outline-success" size="sm" className="me-2">
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                    <Button variant="outline-danger" size="sm">
                      <i className="bi bi-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageTeachers;
