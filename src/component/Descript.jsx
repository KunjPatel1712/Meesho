import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const ProductDetailPage = () => {
  const { id } = useParams(); // Get the product ID from URL params
  const [prod, setProd] = useState(null);

  useEffect(() => {
    // Fetch product details based on the product ID
    axios
      .get(`http://localhost:3000/gold/${id}`)
      .then((res) => {
        setProd(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!prod) {
    return <div>Loading...</div>;
  }

  return (
    <Container style={{ paddingTop: "20px" }}>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={prod.image} alt={prod.name} />
            <Card.Body>
              <Card.Title>{prod.name}</Card.Title>
              <Card.Text>
                <strong>₹{prod.price}</strong>
              </Card.Text>
              <Card.Text>{prod.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          {/* Any other product details can go here */}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailPage;
