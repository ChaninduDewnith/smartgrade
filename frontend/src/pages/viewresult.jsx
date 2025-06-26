import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container, Spinner, Alert, Badge } from "react-bootstrap";
import axios from "axios";

const StudentResultView = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        // Replace with your real student ID or use authentication
        const response = await axios.get("http://localhost:5000/api/results/student123");
        setResults(response.data);
      } catch (err) {
        setError("Failed to fetch results.");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold text-success mb-4">My Exam Results</h2>

      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="success" />
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {!loading && results.length === 0 && (
        <p className="text-center">No results available yet.</p>
      )}

      {!loading && results.length > 0 && (
        <Table striped bordered hover responsive className="shadow-sm">
          <thead className="table-success">
            <tr>
              <th>#</th>
              <th>Subject</th>
              <th>Exam</th>
              <th>Marks</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {results.map((res, index) => (
              <tr key={res._id || index}>
                <td>{index + 1}</td>
                <td>{res.subject}</td>
                <td>{res.examType}</td>
                <td>{res.marks}</td>
                <td>
                  <Badge bg={res.marks >= 50 ? "success" : "danger"}>
                    {res.marks >= 50 ? "Pass" : "Fail"}
                  </Badge>
                </td>
                <td>{new Date(res.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default StudentResultView;
