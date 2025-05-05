import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const CategoryPage = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/gold")
      .then((res) => {
        const data = res.data;
        if (category === "lehengas") {
          setItems(data.lehengas || []);
        } else if (category === "kurtas") {
          setItems(data.kurtas || []);
        } else if (category === "Sarees") {
          setItems(data.Sarees || []);
        } else if (category === "Jewellery") {
          setItems(data.Jewellery || []);
        }
      })
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <Container style={{ paddingTop: "20px" }}>
      <h2 className="text-center text-capitalize mb-4">{category}</h2>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-3">
        {items.map((e) => (
          <Col key={e.id}>
            <Link to={`/product/${e.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <Card
                style={{
                  borderRadius: "12px",
                  border: "1px solid #ddd",
                  height: "100%",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Card.Img
                  variant="top"
                  src={e.image}
                  alt={e.name}
                  style={{
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "12px 12px 0 0",
                  }}
                />
                <Card.Body style={{ padding: "10px" }}>
                  <Card.Title style={{ fontSize: "14px", minHeight: "40px" }}>{e.name}</Card.Title>
                  <Card.Text style={{ margin: 0 }}>
                    <strong>₹{e.price}</strong>
                  </Card.Text>
                  {e.delivery && (
                    <Card.Text style={{ color: "#00b000", fontSize: "12px", margin: 0 }}>
                      {e.delivery}
                    </Card.Text>
                  )}
                  <Card.Text style={{ fontSize: "12px", marginTop: "4px" }}>
                    ⭐ <strong>{e.rating}</strong> &nbsp;
                    <span style={{ color: "#666" }}>({e.reviews} Reviews)</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryPage;
