import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer className="bg-light py-5 mt-5" style={{ borderTop: '1px solid #ccc' }}>
      <Container>
        <Row className="mb-4">
          <Col md={4}>
            <h4>Shop Non-Stop on Meesho</h4>
            <p>Trusted by more than 1 Crore Indians<br />
              Cash on Delivery | Free Delivery</p>
            <div className="d-flex">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style={{ width: '140px', marginRight: '10px' }} />
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" style={{ width: '120px' }} />
            </div>
          </Col>

          <Col md={2}>
            <h6>Careers</h6>
            <h6>Become a supplier</h6>
            <h6>Hall of Fame</h6>
            <h6>Sitemap</h6>
          </Col>

          <Col md={3}>
            <h6>Legal and Policies</h6>
            <h6>Meesho Tech Blog</h6>
            <h6>Notices and Returns</h6>
          </Col>

          <Col md={3}>
            <h5><strong>Reach out to us</strong></h5>
            <div className="d-flex mb-3">
              <i className="fab fa-facebook fa-lg me-3"></i>
              <i className="fab fa-instagram fa-lg me-3"></i>
              <i className="fab fa-youtube fa-lg me-3"></i>
              <i className="fab fa-linkedin fa-lg me-3"></i>
              <i className="fab fa-twitter fa-lg"></i>
            </div>
            <h5><strong>Contact Us</strong></h5>
            <p style={{ fontSize: '14px' }}>
              Fashnear Technologies Private Limited,<br />
              CIN: U74900KA2015PTC082263<br />
              3rd Floor, Wing-E, Helios Business Park, Kadubeesanahalli Village, Varthur Hobli,<br />
              Outer Ring Road Bellandur, Bangalore,<br />
              Bangalore South, Karnataka, India, 560103<br />
            <br />
              © 2015-2025 Meesho.com
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
