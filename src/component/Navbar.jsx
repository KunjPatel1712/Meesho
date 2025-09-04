import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"
import ProfileMenu from './Profilemenu';
import CartPage from './Cart';
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import Login from '../Login';
// import Login from '../Login';

const MeeshoNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const categoriesRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const updateScrollButtons = () => {
    if (categoriesRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = categoriesRef.current;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const ref = categoriesRef.current;
    if (ref) {
      ref.addEventListener('scroll', updateScrollButtons);
      window.addEventListener('resize', updateScrollButtons);
    }
    return () => {
      if (ref) {
        ref.removeEventListener('scroll', updateScrollButtons);
        window.removeEventListener('resize', updateScrollButtons);
      }
    };
  }, []);

  const categories = [
    {
      title: "Women Ethnic",
      items: [
        { header: "Sarees", subitems: ["All Sarees", "Silk Sarees", "Banarasi Silk Sarees", "Cotton Sarees", "Georgette Sarees", "Chiffon Sarees", "Heavy Work Sarees"] },
        { header: "Kurtis", subitems: ["All Kurtis", "Anarkali Kurtis", "Rayon Kurtis", "Cotton Kurtis", "Chikankari Kurtis"] },
        { header: "Kurta Sets", subitems: ["All Kurta Sets", "Kurta Palazzo Sets", "Rayon Kurta Sets", "Kurta Pant Sets", "Cotton Kurta Sets", "Sharara Sets"] },
        { header: "Dupatta Sets", subitems: ["Cotton Sets", "Rayon Sets", "Printed Sets"] },
        { header: "Suits & Dress Material", subitems: ["All Suits & Dress Material", "Cotton Suits", "Embroidered Suits", "Crepe Suits", "Silk Suits", "Patiala Suits"] },
        { header: "Lehengas", subitems: ["Lehenga Cholis", "Net Lehenga", "Bridal Lehenga"] },
      ]
    },
    {
      title: "Women Western",
      items: ["All Women Western"]
    },
    {
      title: "Men",
      items: ["All Men"]
    },
    {
      title: "Kids",
      items: ["All Kids"]
    },
    {
      title: "Home & Kitchen",
      items: ["All Home & Kitchen"]
    },
    {
      title: "Beauty & Health",
      items: ["All Beauty & Health"]
    },
    {
      title: "Jewellery & Accessories",
      items: ["All Jewellery & Accessories"]
    },
    {
      title: "Bags & Footwear",
      items: ["All Bags & Footwear"]
    },
    {
      title: "Electronics",
      items: ["All Electronics"]
    },
    {
      title: "Electronics",
      items: ["All Electronics"]
    },
    {
      title: "Electronics",
      items: ["All Electronics"]
    },
    {
      title: "Electronics",
      items: ["All Electronics"]
    },
    {
      title: "Electronics",
      items: ["All Electronics"]
    }
  ];

const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const params = new URLSearchParams(searchParams);
      if (searchTerm.trim()) {
        params.set("q", searchTerm.trim());
      } else {
        params.delete("q");
      }
      navigate({ pathname: "/", search: params.toString() });
    }
  };
  
  // const handleSignUpClick = () => {
  //   history.push('/login');  
  // };



  return (
    <div   style={{ position: 'sticky',
    top: 0,
    zIndex: 1000,
    background: 'white'}} >
      
      <Navbar
        expand="lg"
        className="meesho-navbar"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container fluid>
         
          <Navbar.Brand href="#home" className="meesho-logo">
            <span className="logo-text"><a href=' /' style={{textDecoration:"none", color:"#570D48"}}>meesho</a></span>
          </Navbar.Brand>

         
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
       
          
             <Form className="meesho-search mx-auto">
      <FormControl
        type="search"
        placeholder="Try Saree, Kurti or Search by Product Code"
        className="search-input"
        aria-label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleSearch}
      />
      <span className="search-icon">
        <i className="fas fa-search"></i>
      </span>
    </Form>

          
           <Nav className="ms-auto meesho-nav">
  <Nav.Link href="#become-supplier" className="nav-link">
    Become a Supplier
  </Nav.Link>
  <Nav.Link href="#investor-relations" className="nav-link">
    Investor Relations
  </Nav.Link>
  <Nav.Link href="#profile" className="nav-link">
   
  </Nav.Link>
  <ProfileMenu />
  <Nav.Link as={Link} to="/component/CartPage" className="nav-link">
    <i className="fas fa-shopping-cart"></i> Cart
  </Nav.Link>

         
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Categories Bar with Slider */}
      <div className="categories-bar">
        {showLeft && (
          <button className="scroll-btn left-btn" onClick={scrollLeft}>
            <i className="fas fa-chevron-left"></i>
          </button>
        )}
        <div className="categories-scroll" ref={categoriesRef}>
          <div className="categories-nav">
            {categories.map(category => (
              <div key={category.title} className="category-dropdown">
                <span className="dropdown-toggle">
                  {category.title}
                  <i className="fas fa-chevron-down dropdown-arrow"></i>
                </span>
                <div className="dropdown-menu">
                  {category.items.map((item, index) => (
                    <div key={index} className="dropdown-column">
                      {item.header && <h6 className="dropdown-header">{item.header}</h6>}
                      {Array.isArray(item.subitems) ? (
                        item.subitems.map((subitem, subIndex) => (
                          <a
                            key={subIndex}
                            href={`#${subitem.toLowerCase().replace(/\s/g, '-')}`}
                            className="dropdown-item"
                          >
                            {subitem}
                          </a>
                        ))
                      ) : (
                        <a
                          href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                          className="dropdown-item"
                        >
                          {item}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {showRight && (
          <button className="scroll-btn right-btn"  onClick={scrollRight}>
            <i className="fas fa-chevron-right"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default MeeshoNavbar;