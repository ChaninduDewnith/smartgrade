import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Container, Spinner, Alert } from "react-bootstrap";
import axios from "axios";

const ClassView = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/classes");
        setClasses(response.data);
      } catch (err) {
        setError("Failed to load classes.");
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

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
        <div
          className="bg-light bg-opacity-85 p-4 p-md-5 rounded-4 shadow-lg"
          style={{ backdropFilter: "blur(10px)" }}
        >
          <h2 className="text-center text-primary fw-bold mb-4">Available Classes</h2>

          {loading && (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
            </div>
          )}

          {error && <Alert variant="danger">{error}</Alert>}

          {!loading && !error && (
            <Row xs={1} md={2} lg={3} className="g-4">
              {classes.map((classItem, index) => (
                <Col key={index}>
                  <Card className="shadow rounded-4 h-100">
                    <Card.Body>
                      <Card.Title className="text-primary fw-bold">{classItem.className}</Card.Title>
                      <Card.Text>
                        <strong>Teacher:</strong> {classItem.classTeacher}<br />
                        <strong>Grade Level:</strong> {classItem.gradeLevel}<br />
                        <strong>Room:</strong> {classItem.roomNumber}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}

          {!loading && classes.length === 0 && !error && (
            <p className="text-center">No classes available.</p>
          )}

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

export default ClassView;
