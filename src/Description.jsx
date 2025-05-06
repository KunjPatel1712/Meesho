import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Row, Col, Button, Image, Container, Badge } from 'react-bootstrap';

const Description = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const endpoints = [
          "ethnicwear", "accessories", "beauty", "footwear", "grocery",
          "homemain", "Menswear", "westrendress", "homedecore"
        ];

        const allData = await Promise.all(
          endpoints.map((endpoint) =>
            axios.get(`http://localhost:3000/${endpoint}`)
          )
        );

        const allProducts = allData.flatMap(res => res.data);
        const foundProduct = allProducts.find(p => String(p.id) === id);

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    if (!product) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(item => item.id === product.id);

    const updatedCart = existing
      ? cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...cart, { ...product, quantity: 1 }];

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} added to cart!`);
  };

  if (loading) return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
      <div className="text-center">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading product details...</p>
      </div>
    </Container>
  );

  if (error) return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
      <div className="text-center text-danger">
        <p>{error}</p>
        <Button variant="outline-danger" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    </Container>
  );

  if (!product) return null;

  // Use the product's image field for the image
  return (
    <Container className="my-5">
      <Row className="g-4">
        {/* Left Thumbnails - Vertical */}

        {/* Main Image */}
        <Col xs={12} md={5} className="d-flex justify-content-center">
          <div className="main-image-container">
            <Image 
              src={product.image}  // Use product.image
              alt={product.name} 
              fluid 
              className="main-product-image"
            />
            {product.discount && (
              <Badge bg="danger" className="discount-badge">
                {product.discount}% OFF
              </Badge>
            )}
          </div>
        </Col>

        {/* Product Info */}
        <Col xs={12} md={5}>
          <h1 className="product-title">{product.name}</h1>

          {product.rating && (
            <div className="mb-3">
              <Badge bg="warning" text="dark">
                {product.rating} ★
              </Badge>
              <span className="ms-2 text-muted">({product.reviews || 0} reviews)</span>
            </div>
          )}

          <div className="price-section mb-3">
            {product.originalPrice && (
              <span className="original-price me-2">
                ₹{product.originalPrice}
              </span>
            )}
            <span className="current-price h4 text-danger">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="discount-percentage ms-2 text-success">
                {Math.round((1 - product.price / product.originalPrice) * 100)}% off
              </span>
            )}
          </div>

          <div className="product-description mb-4">
            <h5>Description</h5>
            <p>{product.description || "No description available"}</p>
          </div>

          <div className="d-flex gap-3 mb-4">
            <div className="quantity-selector">
              <Button variant="outline-secondary" size="sm">-</Button>
              <span className="mx-2">1</span>
              <Button variant="outline-secondary" size="sm">+</Button>
            </div>
            <Button 
              variant="outline-danger" 
              onClick={addToCart} 
              className="flex-grow-1"
            >
              🛒 Add to Cart
            </Button>
          </div>

        </Col>
      </Row>
    </Container>
  );
};

export default Description;
