import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
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
import { Container, Row } from "react-bootstrap";
import Sidebar from './component/Sidebar';

// No need to import no2.webp if using background-image in CSS

const Home = () => {

  const [filter, setfilter] = useState(null);
  
    const [product, setProducts] = useState([]);

    useEffect(() => {
    
        axios
        .get("http://localhost:3000/products", {
          params: {
            category: filter || searchparams.getAll("category"),
           
          },
        })
})
useEffect(() => {
  const id = setTimeout(() => {
    getproduct();
  }, 800);

  return () => {
    clearTimeout(id);
  };
}, [filter]);
  
  
  

  console.log(product);
  return (
    <div className="container-fluid p-0 meesho-banner">
      <div className="row g-0">
        <div className="col-md-12 img-banner">
          <div className="text">
            <div className="promo-text px-3">
              <h2 className="fw-bold">Smart Shopping</h2>
              <h3 className="fw-semibold">Trusted by Millions</h3>
              <button className="btn mt-3">Shop Now</button>
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
      <Link to="/products/ethnic-wear" className="category-item">
        <div className="category-icon">
          <img src={women} alt="Ethnic Wear" />
        </div>
        <span className="category-name">Ethnic Wear</span>
      </Link>
      <Link to="/products/western-dresses" className="category-item">
        <div className="category-icon">
          <img src={westen} alt="Western Dresses" />
        </div>
        <span className="category-name">Western Dresses</span>
      </Link>
      <Link to="/products/menswear" className="category-item">
        <div className="category-icon">
          <img src={mens} alt="Menswear" />
        </div>
        <span className="category-name">Menswear</span>
      </Link>
      <Link to="/products/footwear" className="category-item">
        <div className="category-icon">
          <img src={foot} alt="Footwear" />
        </div>
        <span className="category-name">Footwear</span>
      </Link>
      <Link to="/products/home-decor" className="category-item">
        <div className="category-icon">
          <img src={homedecore} alt="Home Decor" />
        </div>
        <span className="category-name">Home Decor</span>
      </Link>
      <Link to="/products/beauty" className="category-item">
        <div className="category-icon">
          <img src={beauty} alt="Beauty" />
        </div>
        <span className="category-name">Beauty</span>
      </Link>
      <Link to="/products/accessories" className="category-item">
        <div className="category-icon">
          <img src={accessorie} alt="Accessories" />
        </div>
        <span className="category-name">Accessories</span>
      </Link>
      <Link to="/products/grocery" className="category-item">
        <div className="category-icon">
          <img src={grocery} alt="Grocery" />
        </div>
        <span className="category-name">Grocery</span>
      </Link>
    </div>

    <div className="gold-gorizontal  w-100 col-12 d-flex">
        <div className="col-6"> 
                <button className= "btn">
                    Shop Now
                </button>
        </div>
        <div className="col-6 tags-4">
            <img src={lehga} alt="" />
            <img src={shervani} alt="" />
            <img src={saree} alt=""  />
            <img src={jewellery} alt=""  />
        </div>
    </div>



    <div className="category-slider-container">
    <h1 className="slider-title">
        Original Brands
        <span className="verified-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1DA1F2">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </span>
      </h1>
  <div className="brand-slider">
    <Link to="/origanal-brand/personal-care" className="category-card">
      <div className="category-image-wrapper">
        <img src={personalcare} alt="Personal Care" />
      </div>
    </Link>

    <Link to="/origanal-brand/electronics" className="category-card">
      <div className="category-image-wrapper">
        <img src={electronic} alt="Electronics" />
      </div>
    </Link>

    <Link to="/origanal-brand/makeup" className="category-card">
      <div className="category-image-wrapper">
        <img src={makeup} alt="Makeup" />
      </div>
    </Link>

    <Link to="/origanal-brand/smart-phones" className="category-card">
      <div className="category-image-wrapper">
        <img src={smartphone} alt="Smart Phones" />
      </div>
    </Link>

    <Link to="/origanal-brand/men-perfume" className="category-card">
      <div className="category-image-wrapper">
        <img src={mensperfume} alt="Men Perfume" />
      </div>
    </Link>

    <Link to="/origanal-brand/bags" className="category-card">
      <div className="category-image-wrapper">
        <img src={bags} alt="Bags" />
      </div>
    </Link>

    <Link to="/origanal-brand/footwear" className="category-card">
      <div className="category-image-wrapper">
        <img src={footwearbrand} alt="Footwear" />
      </div>
    </Link>

    <Link to="/origanal-brand/books" className="category-card">
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


<Container fluid className="mt-4">
  <Row>
    {/* Left Sidebar */}
    <Sidebar />

    {/* Right Product Grid */}
    <div className="right-panel col-md-8 p-3">
      <Row>
        {product.map((e) => (
          <div key={e.id} className="product-card-wrapper col-md-6 col-lg-4 mb-4 d-flex">
            <div className="shadow-sm border rounded p-2 w-100 d-flex flex-column">
              <div style={{ height: "250px", overflow: "hidden" }}>
                <img
                  src={e.image}
                  alt={e.name}
                  className="img-fluid w-100"
                  style={{  height: "100%" }}
                />
              </div>
              <div className="mt-2">
                <h6 className="mb-1">{e.name}</h6>
                <p className="fw-bold text-success mb-1">{e.price}</p>
                <p style={{backgroundColor:"rgb(3,141,99)",color:"white", width:"38px",paddingLeft:"5px", borderRadius:"16px"}}>{e.rating}</p>
                  
                <p className="text-muted mb-2" style={{ fontSize: "0.9rem" }}>
                  {e.reviews}
                </p>
                <button className="btn btn-outline-primary w-100">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </Row>
    </div>
  </Row>
</Container>

</div>

  );
  
};

export default Home;
