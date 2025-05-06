import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const ProductDetailPage = () => {
  const { id } = useParams(); // Get the product ID from URL params
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on the product ID
    axios
      .get(`http://localhost:3000/gold/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container style={{ paddingTop: "20px" }}>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={product.image} alt={product.name} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                <strong>₹{product.price}</strong>
              </Card.Text>
              <Card.Text>{product.description}</Card.Text>
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
