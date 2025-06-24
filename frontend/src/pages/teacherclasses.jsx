import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Container, Spinner, Alert, Button } from "react-bootstrap";
import axios from "axios";

const TeacherClassList = () => {
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
    <Container className="py-5">
      <h2 className="text-center fw-bold text-primary mb-4">My Classes</h2>

      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {!loading && !error && (
        <Row xs={1} md={2} lg={3} className="g-4">
          {classes.length > 0 ? (
            classes.map((classItem, index) => (
              <Col key={index}>
                <Card className="shadow rounded-4 h-100">
                  <Card.Body>
                    <Card.Title className="fw-bold text-primary">
                      {classItem.className}
                    </Card.Title>
                    <Card.Text>
                      <strong>Grade:</strong> {classItem.gradeLevel}<br />
                      <strong>Room:</strong> {classItem.roomNumber}<br />
                      <strong>Teacher:</strong> {classItem.classTeacher}
                    </Card.Text>
                    <div className="text-end">
                      <Button size="sm" variant="outline-primary">
                        View Students
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center">No classes found.</p>
          )}
        </Row>
      )}
    </Container>
  );
};

export default TeacherClassList;
