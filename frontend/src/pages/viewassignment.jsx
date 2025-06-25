import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container, Spinner, Alert, Button } from "react-bootstrap";
import axios from "axios";

const ViewAssignment = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/assignments");
        setAssignments(response.data);
      } catch (err) {
        setError("Failed to load assignments.");
      } finally {
        setLoading(false);
      }
    };

    fetchAssignments();
  }, []);

  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold text-primary mb-4">Submitted Assignments</h2>

      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {!loading && !error && (
        <>
          {assignments.length === 0 ? (
            <p className="text-center">No assignments submitted yet.</p>
          ) : (
            <Table striped bordered hover responsive className="shadow-sm">
              <thead className="table-primary">
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Student Name</th>
                  <th>Class</th>
                  <th>Submitted On</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {assignments.map((assignment, index) => (
                  <tr key={assignment._id || index}>
                    <td>{index + 1}</td>
                    <td>{assignment.title}</td>
                    <td>{assignment.studentName || "N/A"}</td>
                    <td>{assignment.className || "N/A"}</td>
                    <td>{new Date(assignment.submittedAt).toLocaleString()}</td>
                    <td>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        href={assignment.fileUrl} // Assume backend returns file URL
                        target="_blank"
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </>
      )}
    </Container>
  );
};

export default ViewAssignment;
