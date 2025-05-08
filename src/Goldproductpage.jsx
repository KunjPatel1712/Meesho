  import React, { useEffect, useState } from "react";
  import axios from "axios";
  import { Link, useParams } from "react-router-dom";
  import { Card, Col, Container, Row } from "react-bootstrap";


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
      
      <Container fluid className="py-4">
      <h2 className="text-uppercase mb-4">{category}</h2>
      {items.length === 0 ? (
        <p>No items available for this category.</p>
      ) : (
        <Row className="g-4">
          {items.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Link
                to={`/product/${item.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Card
                  className="h-100 shadow-sm border-0"
                  style={{
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow =
                      '0 6px 16px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 0 0 transparent';
                  }}
                >
                  {/* Image Container */}
                  <div
                    style={{
                      height: '200px',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      backgroundColor: '#f8f8f8',
                      borderTopLeftRadius: '8px',
                      borderTopRightRadius: '8px',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
    
                  <Card.Body>
                    <Card.Title
                      as="h4"
                      style={{ fontSize: '16px', marginBottom: '5px' }}
                    >
                      {item.name}
                    </Card.Title>
                    <Card.Text style={{ marginBottom: '4px', color: '#333' }}>
                      ₹{item.price}
                    </Card.Text>
                    <Card.Text style={{ marginBottom: '4px', color: '#333' }}>
                      {item.delivery}
                    </Card.Text>
                    <Card.Text style={{ marginBottom: '4px', color: '#333' }}>
                      ⭐ {item.rating} ({item.reviews} reviews)
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      )}
    </Container>
      );
    
  };

  export default CategoryPage;
