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
const [searchParam] = useSearchParams();
const [order, setOrder] = useState("asc");

   const paramObj = {
    category: searchParam.getAll("category"),
    _sort: "price",
    _order: order,
    q: searchParam.get("q") || "",
  };



   useEffect(() => {
     axios
       .get("http://localhost:3000/homemain", { params: paramObj })
       .then((res) => {
         setProducts(res.data);
       })
       .catch((err) => {
         console.error("Failed to fetch lifestyle items:", err);
       });
   }, [searchParam,order]);
   

   
 

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


    <div className="trendz-container mt-5">
      <div className="trendz-left col-3">
       
        <button className="trendz-btn ">Shop Now</button>
      </div>

      <div className="trendz-items col-9">
        <div className="trendz-card">
          <div className="trendz-image-wrapper">
            <img
              src={summerdress}
              alt="Summer Dresses"
            />
            <div className="sparkle">✨</div>
          </div>
          <div className="trendz-label">Summer Dresses</div>
        </div>

        <div className="trendz-card">
          <div className="trendz-image-wrapper">
            <img
              src={baggyjeans}
              alt="Baggy Jeans"
            />
            <div className="sparkle">✨</div>
          </div>
          <div className="trendz-label">Baggy Jeans</div>
        </div>

        <div className="trendz-card">
          <div className="trendz-image-wrapper">
            <img
              src={earrings}
              alt="Earrings"
            />
            <div className="sparkle">✨</div>
          </div>
          <div className="trendz-label">Earrings</div>
        </div>

        <div className="trendz-card">
          <div className="trendz-image-wrapper">
            <img
              src={chicflats}
              alt="Chic Flats"
            />
            <div className="sparkle">✨</div>
          </div>
          <div className="trendz-label">Chic Flats</div>
        </div>
      </div>
    

    
</div>



    <Container className="mt-4">
      <Row>
        {/* Left Part - Sidebar */}
        <Col xs={12} md={3} lg={3} className="p-3">
         <Sidebar />
        </Col>

        {/* Right Part - Product Grid */}
        <Col xs={12} md={9} lg={9} className="p-3">
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {products.map((e) => (
              <Col key={e.id}>
                <Link
                  to={`/product/${e.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div
                    style={{
                      height: '100%',
                      boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
                      borderRadius: '1rem',
                      overflow: 'hidden',
                      backgroundColor: '#fff',
                    }}
                  >
                    <div style={{ height: '250px', overflow: 'hidden' }}>
                      <img
                        src={e.image}
                        alt={e.name}
                        style={{
                          height: '100%',
                          width: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                    <div style={{ padding: '1rem' }}>
                      <h6 style={{ marginBottom: '0.25rem', fontSize: '1rem' }}>
                        {e.name}
                      </h6>
                      <p
                        style={{
                          fontWeight: 'bold',
                          color: '#198754',
                          marginBottom: '0.25rem',
                        }}
                      >
                        ₹{e.price}
                      </p>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          marginBottom: '0.25rem',
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: '#038d63',
                            color: 'white',
                            borderRadius: '12px',
                            padding: '4px 10px',
                            fontSize: '0.85rem',
                          }}
                        >
                          ⭐ {e.rating}
                        </span>
                        <small style={{ color: '#6c757d' }}>({e.reviews})</small>
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
 




  


export default Home;
