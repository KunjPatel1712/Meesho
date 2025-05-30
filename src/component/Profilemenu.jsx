import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProfileMenu = () => {
  const [hovered, setHovered] = useState(false);
    
  const navigate = useNavigate(); 

  const handleSignUpClick = () => {
    navigate('/login');  
  };

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Nav.Link
        href="#profile"
        className="nav-link"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontWeight: 500,
          color: '#000',
        }}
      >
        <i className="fas fa-user"></i> Profile
      </Nav.Link>

      {hovered && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            width: '260px',
            backgroundColor: '#fff',
            boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
            borderRadius: '0.5rem',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              padding: '1rem',
              borderBottom: '1px solid #eee',
            }}
          >
            <strong>Hello User</strong>
            <div style={{ fontSize: '0.85rem', color: '#6c757d' }}>
              To access your Meesho account
            </div>
            <button        onClick={handleSignUpClick}
              style={{
                marginTop: '0.75rem',
                width: '100%',
                backgroundColor: '#9c27b0',
                color: 'white',
                border: 'none',
                borderRadius: '0.25rem',
                padding: '0.5rem',
                fontWeight: 600,
              }}
       
            >
              Sign Up
            </button>
          </div>
          <div
  style={{
    padding: '0.75rem 1rem',
    borderBottom: '1px solid #eee',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
  }}
  onClick={() => navigate('/component/Cartpage')} // 👈 navigate to cart
>
  <i className="fas fa-lock"></i> My Orders
</div>
          <div
            style={{
              padding: '0.75rem 1rem',
              color: '#dc3545',
              cursor: 'pointer',
            }}
          >
            Delete Account
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
