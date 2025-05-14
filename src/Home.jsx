import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

import { Link, useNavigate, useSearchParams} from 'react-router-dom';
import './index.css';
import women from "./assets/athicwhere.webp"
import westen from "./assets/westrendress.webp"
import mens from "./assets/menswere.webp"
import foot from "./assets/footwear.webp"
import homedecore from "./assets/homedecor.webp"
import  beauty from "./assets/beauty.webp"
import accessorie from "./assets/accessories.webp"
import grocery from "./assets/grocery.webp"
import lehga from "./assets/lehengas.webp"
import shervani from "./assets/shervani.webp"
import saree from"./assets/saree.webp"
import jewellery from "./assets/jewellery.webp"
import bags from "./assets/bags.webp"
import personalcare from "./assets/personal-care.webp"
import electronic from "./assets/electronics.webp"
import makeup from "./assets/makeup.webp"
import smartphone from "./assets/smartphones.webp"
import mensperfume from "./assets/mensperfume.webp"
import footwearbrand from "./assets/footwear-brand.webp"
import booksbrand from "./assets/books-brand.webp"
import summerdress from "./assets/summerdress.webp"
import baggyjeans from "./assets/baggyjeans.webp"
import earrings from "./assets/earnings.webp"
import chicflats from "./assets/chicflats.webp"
import axios from 'axios';
import ethic from './categories/Ethnicwear';
import Sidebar from './component/Sidebar';




const Home = () => {

 const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    const category = searchParams.getAll("category");
    const priceRanges = searchParams.getAll("price");
    const ratings = searchParams.getAll("rating");

    const paramObj = {
      ...(category.length ? { category } : {}),
      _sort: "price",
      _order: order,
      q: searchParams.get("q") || "",
    };

    axios
      .get("http://localhost:3000/homemain", { params: paramObj })
      .then((res) => {
        let data = res.data;

        // ✅ Manual price filtering
        if (priceRanges.length) {
          data = data.filter((item) =>
            priceRanges.some((range) => {
              const [min, max] = range.split("-").map(Number);
              return item.price >= min && item.price <= max;
            })
          );
        }

        // ✅ Manual rating filtering
        if (ratings.length) {
          data = data.filter((item) =>
            ratings.some((min) => item.rating >= Number(min))
          );
        }

        setProducts(data);
      })
      .catch((err) => console.error("Failed to fetch products:", err));
  }, [searchParams, order]);

   const navigate = useNavigate();

   // Function to handle category selection and navigate
   const handleClick = (categoryName) => {
     navigate(`/category/${categoryName}`);
   };

   //slider 

  


  
  return (
    <div className="container-fluid p-0 meesho-banner">
     <div className="container-fluid p-0">
  <div className="row g-0">
    <div className="col-12">
      <div className="img-banner d-flex align-items-center justify-content-end text-center text-white px-3 ">
        <div className="promo-text">
          <h2 className="fw-bold display-5">Smart Shopping</h2>
          <h3 className="fw-semibold h4">Trusted by Millions</h3>
          <button className="btn btn-primary mt-3">Shop Now</button>
        </div>
      </div>
    </div>
  </div>
</div>


      <div className="row info-strip text-center py-3 border-top w-100">
        <div className="col-12 col-md">
          <span role="img" aria-label="return">📦</span> 7 Days Easy Return
        </div>
        <div className="col-12 col-md border-start border-end">
          <span role="img" aria-label="cod">💰</span> Cash on Delivery
        </div>
        <div className="col-12 col-md">
          <span role="img" aria-label="price">🏷️</span> Lowest Prices
        </div>
      </div>

      {/* Horizontal Scroll Categories */}

    
      <div className="horizontal mt-3">
      <Link to={'/ethic'} className="category-item">
        <div className="category-icon">
          <img src={women} alt="Ethnic Wear" />
        </div>
        <span className="category-name">Ethnic Wear</span>
      </Link>
      <Link to={'/westerndress'} className="category-item">
        <div className="category-icon">
          <img src={westen} alt="Western Dresses" />
        </div>
        <span className="category-name">Western Dresses</span>
      </Link>
      <Link to={'/mens'} className="category-item">
        <div className="category-icon">
          <img src={mens} alt="Menswear" />
        </div>
        <span className="category-name">Menswear</span>
      </Link>
      <Link to={'/footwear'}className="category-item">
        <div className="category-icon">
          <img src={foot} alt="Footwear" />
        </div>
        <span className="category-name">Footwear</span>
      </Link>
      <Link to={'/decore'} className="category-item">
        <div className="category-icon">
          <img src={homedecore} alt="Home Decor" />
        </div>
        <span className="category-name">Home Decor</span>
      </Link>
      <Link to={'/beauty'} className="category-item">
        <div className="category-icon">
          <img src={beauty} alt="Beauty" />
        </div>
        <span className="category-name">Beauty</span>
      </Link>
      <Link to={'/accessories'} className="category-item">
        <div className="category-icon">
          <img src={accessorie} alt="Accessories" />
        </div>
        <span className="category-name">Accessories</span>
      </Link>
      <Link to={'/grocery'} className="category-item">
        <div className="category-icon">
          <img src={grocery} alt="Grocery" />
        </div>
        <span className="category-name">Grocery</span>
      </Link>
    </div>


   

    <Container fluid className="gold-horizontal p-0">
      <Row className="gold-row g-0 h-100">
        {/* Left Column - Empty on mobile, contains button on desktop */}
        <Col md={6} className="d-none d-md-flex align-items-end pb-5">
          <button 
           
            className="gold-btn desktop-btn"
            
          >
            Shop Now
          </button>
        </Col>

        {/* Right Column - 4 Images in 2 Pairs */}
        <Col md={6} className="h-100 d-flex align-items-center justify-content-center">
          <div className="image-pairs-container">
            {/* First Pair Row */}
            <Row className="mb-3 mb-md-4">
              <Col xs={6} className="text-center">
                <img 
                  src={lehga} 
                  alt="Lehenga" 
                  className="category-img"
                  onClick={() => handleClick("lehengas")} 
                />
                
              </Col>
              <Col xs={6} className="text-center">
                <img 
                  src={shervani} 
                  alt="Sherwani" 
                  className="category-img"
                  onClick={() => handleClick("kurtas")} 
                />
                
              </Col>
            </Row>
            
          
            <Row>
              <Col xs={6} className="text-center">
                <img 
                  src={saree} 
                  alt="Saree" 
                  className="category-img"
                  onClick={() => handleClick("Sarees")} 
                />
                
              </Col>
              <Col xs={6} className="text-center">
                <img 
                  src={jewellery} 
                  alt="Jewellery" 
                  className="category-img"
                  onClick={() => handleClick("Jewellery")} 
                />
                
              </Col>
            </Row>
          </div>
        </Col>

        {/* Mobile Button - Only visible on mobile at bottom */}
        <Col xs={12} className="d-md-none text-center mobile-btn-container">
          <Button 
            variant="outline-light" 
            className="gold-btn mobile-btn"
            onClick={() => handleClick("shop")}
          >
            Shop Now
          </Button>
        </Col>
      </Row>
    </Container>






    <div className="category-slider-container">
      <h1 className="slider-title">
        Original Brands
        <span className="verified-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1DA1F2">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </span>
      </h1>

      <div className="brand-slider">
        <Link to="/slider/product" className="category-card">
          <div className="category-image-wrapper">
            <img src={personalcare} alt="Personal Care" />
          </div>
        </Link>

        <Link to="/slider/electronics" className="category-card">
          <div className="category-image-wrapper">
            <img src={electronic} alt="Electronics" />
          </div>
        </Link>

        <Link to="/slider/makeup" className="category-card">
          <div className="category-image-wrapper">
            <img src={makeup} alt="Makeup" />
          </div>
        </Link>

        <Link to="/slider/mobile" className="category-card">
          <div className="category-image-wrapper">
            <img src={smartphone} alt="Smart Phones" />
          </div>
        </Link>

        <Link to="/slider/Perfume" className="category-card">
          <div className="category-image-wrapper">
            <img src={mensperfume} alt="Men Perfume" />
          </div>
        </Link>

        <Link to="/slider/bags" className="category-card">
          <div className="category-image-wrapper">
            <img src={bags} alt="Bags" />
          </div>
        </Link>

        <Link to="/slider/footwearslider" className="category-card">
          <div className="category-image-wrapper">
            <img src={footwearbrand} alt="Footwear" />
          </div>
        </Link>

        <Link to="/slider/books" className="category-card">
          <div className="category-image-wrapper">
            <img src={booksbrand} alt="Books" />
          </div>
        </Link>
      </div>
    </div>

<div className="slider-container">
  <div className="scroll-container">
    <div className="scroll-content">
      {/* Original Images */}
      <div><img src="https://images.meesho.com/images/marketing/1743159302944.webp" alt="Image 1" /></div>
      <div><img src="https://images.meesho.com/images/marketing/1743159322237.webp" alt="Image 2" /></div>
      <div><img src="https://images.meesho.com/images/marketing/1743159363205.webp" alt="Image 3" /></div>
      <div><img src="https://images.meesho.com/images/marketing/1743159377598.webp" alt="Image 4" /></div>
      <div><img src="https://images.meesho.com/images/marketing/1743159393231.webp" alt="Image 5" /></div>
      <div><img src="https://images.meesho.com/images/marketing/1743159415385.webp" alt="Image 6" /></div>
      <div><img src="https://images.meesho.com/images/marketing/1744636558884.webp" alt="Image 7" /></div>
      <div><img src="https://images.meesho.com/images/marketing/1744636599446.webp" alt="Image 8" /></div>
      
      {/* Duplicated Images for infinite effect */}
      <div><img src="https://images.meesho.com/images/marketing/1743159302944.webp" alt="Image 1" /></div>
      <div><img src="https://images.meesho.com/images/marketing/1743159322237.webp" alt="Image 2" /></div>
      <div><img src="https://images.meesho.com/images/marketing/1743159363205.webp" alt="Image 3" /></div>
      <div><img src="https://images.meesho.com/images/marketing/1743159377598.webp" alt="Image 4" /></div>
      <div><img src="https://images.meesho.com/images/marketing/1743159393231.webp" alt="Image 5" /></div>
      <div><img src="https://images.meesho.com/images/marketing/1743159415385.webp" alt="Image 6" /></div>
      <div><img src="https://images.meesho.com/images/marketing/1744636558884.webp" alt="Image 7" /></div>
      <div><img src="https://images.meesho.com/images/marketing/1744636599446.webp" alt="Image 8" /></div>
    </div>

  </div>
</div>



    
     
    <Container fluid className="trendz-container mt-5 p-4">
      <Row className="align-items-center">
        {/* Left Side - Shop Now Button */}
        <Col xs={12} md={3} className="trendz-left mb-4 mb-md-0 text-center text-md-start d-flex flex-column justify-content-start">
          <Button 
            variant="light" 
            className="trendz-btn px-4 py-3"
            size="lg"
          >
            Shop Now
          </Button>
        </Col>

        {/* Right Side - Trend Cards */}
        <Col xs={12} md={9} className="trendz-items">
          <Row className="g-3 justify-content-center">
            {/* Card 1 */}
            <Col xs={6} sm={4} md={3} lg={3} className="trendz-card-col">
              <div className="trendz-card h-100">
                <div className="trendz-image-wrapper position-relative">
                  <img
                    src={summerdress} 
                    alt="Summer Dresses" 
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="sparkle position-absolute">✨</div>
                </div>
                <div className="trendz-label p-2">Summer Dresses</div>
              </div>
            </Col>

            {/* Card 2 */}
            <Col xs={6} sm={4} md={3} lg={3} className="trendz-card-col">
              <div className="trendz-card h-100">
                <div className="trendz-image-wrapper position-relative">
                  <img 
                    src={baggyjeans} 
                    alt="Baggy Jeans" 
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="sparkle position-absolute">✨</div>
                </div>
                <div className="trendz-label p-2">Baggy Jeans</div>
              </div>
            </Col>

            {/* Card 3 */}
            <Col xs={6} sm={4} md={3} lg={3} className="trendz-card-col">
              <div className="trendz-card h-100">
                <div className="trendz-image-wrapper position-relative">
                  <img 
                    src={earrings} 
                    alt="Earrings" 
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="sparkle position-absolute">✨</div>
                </div>
                <div className="trendz-label p-2">Earrings</div>
              </div>
            </Col>

            {/* Card 4 */}
            <Col xs={6} sm={4} md={3} lg={3} className="trendz-card-col">
              <div className="trendz-card h-100">
                <div className="trendz-image-wrapper position-relative">
                  <img 
                    src={chicflats} 
                    alt="Chic Flats" 
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="sparkle position-absolute">✨</div>
                </div>
                <div className="trendz-label p-2">Chic Flats</div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
   </Container>




  <Container className="mt-4">
      <Row>
        {/* Sidebar */}
        <Col xs={12} md={3} lg={3} className="p-3">
          <Sidebar />
        </Col>

        {/* Product Grid */}
        <Col xs={12} md={9} lg={9} className="p-3">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="mb-0">Products</h4>
            <select
              className="form-select w-auto"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
            >
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>

          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {products.map((e) => (
              <Col key={e.id}>
                <Link
                  to={`/product/${e.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    style={{
                      height: "100%",
                      boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
                      borderRadius: "1rem",
                      overflow: "hidden",
                      backgroundColor: "#fff",
                    }}
                  >
                    <div style={{ height: "250px", overflow: "hidden" }}>
                      <img
                        src={e.image}
                        alt={e.name}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div style={{ padding: "1rem" }}>
                      <h6 style={{ marginBottom: "0.25rem", fontSize: "1rem" }}>
                        {e.name}
                      </h6>
                      <p
                        style={{
                          fontWeight: "bold",
                          color: "#198754",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {e.price}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          marginBottom: "0.25rem",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "#038d63",
                            color: "white",
                            borderRadius: "12px",
                            padding: "4px 10px",
                            fontSize: "0.85rem",
                          }}
                        >
                          ⭐ {e.rating}
                        </span>
                        <small style={{ color: "#6c757d" }}>
                          ({e.reviews})
                        </small>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>


 

 </div>
 )

 }
 




  


export default Home
