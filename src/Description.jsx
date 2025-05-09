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
          "homemain", "Menswear", "westrendress", "homedecore", "gold", "Slider"
        ];

        const responses = await Promise.all(
          endpoints.map((endpoint) => axios.get(`http://localhost:3000/${endpoint}`))
        );

        let allProducts = [];

        responses.forEach((res, idx) => {
          const name = endpoints[idx];

          if (name === "gold") {
            const gold = res.data;
            allProducts.push(
              ...(gold.lehengas || []),
              ...(gold.kurtas || []),
              ...(gold.Sarees || []),
              ...(gold.Jewellery || [])
            );
          } else if (name === "Slider") {
            const slider = res.data;
            allProducts.push(
              ...(slider.product || []),
              ...(slider.mobile || []),
              ...(slider.perfume || []),
              ...(slider.footwear || []),
              ...(slider.books || []),
              ...(slider.bags || []),
              ...(slider.makeup || []),
              ...(slider.footwearslider || [])
              )
            
          } else {
            allProducts.push(...res.data);
          }
        });

        const foundProduct = allProducts.find((p) => String(p.id) === id);

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
    const existing = cart.find((item) => item.id === product.id);

    const updatedCart = existing
      ? cart.map((item) =>
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

  return (
    <Container className="my-5">
      <Row className="g-4">
        <Col xs={12} md={5} className="d-flex justify-content-center">
          <div className="main-image-container position-relative">
            <Image src={product.image} alt={product.name} fluid className="main-product-image" />
            {product.discount && (
              <Badge bg="danger" className="position-absolute top-0 start-0 m-2">
                {product.discount}% OFF
              </Badge>
            )}
          </div>
        </Col>

        <Col xs={12} md={7}>
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
              <span className="text-muted text-decoration-line-through me-2">₹{product.originalPrice}</span>
            )}
            <span className="h4 text-danger">₹{product.price}</span>
            {product.originalPrice && (
              <span className="ms-2 text-success">
                {Math.round((1 - product.price / product.originalPrice) * 100)}% off
              </span>
            )}
          </div>

          {/* Product Description Section */}
          <div className="product-description mb-4">
            <h5 className="fw-semibold">Description</h5>
            <p>
              This high-quality product is crafted with care and precision. Whether you need comfort,
              performance, or style, it’s designed to deliver exceptional results in daily use.
            </p>

            <Row className="mt-3">
              <Col xs={12} sm={6} md={6}>
                <ul className="list-unstyled">
                  <li><strong>Material:</strong> Cotton / Synthetic</li>
                  <li><strong>Color:</strong> Assorted options</li>
                  <li><strong>Brand:</strong> UrbanEdge / FastTech</li>
                  <li><strong>Delivery:</strong> 4–7 working days</li>
                  <li><strong>Category:</strong> Fashion / Electronics / Lifestyle</li>
                </ul>
              </Col>
              <Col xs={12} sm={6} md={6}>
                <ul className="list-unstyled">
                  <li><strong>Size:</strong> S, M, L, XL</li>
                  <li><strong>Weight:</strong> Lightweight</li>
                  <li><strong>Dimensions:</strong> 20cm × 15cm × 10cm</li>
                  <li><strong>Manufacturer:</strong> Global Distributors</li>
                  <li><strong>Language:</strong> English</li>
                </ul>
              </Col>
            </Row>
          </div>

          <div className="d-flex gap-3 mb-4">
            <Button variant="danger" onClick={addToCart} className="flex-grow-1">
              🛒 Add to Cart
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Description;
