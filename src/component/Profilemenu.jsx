import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/");
  };

  return (
    <div
      className="profile-menu"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Profile Button */}
      <Nav.Link href="#profile" className="nav-link profile-btn">
        <i className="fas fa-user"></i> Profile
      </Nav.Link>

      {/* Dropdown */}
      {hovered && (
        <div className="login" style={{marginRight:"-90px"}}>
          <div className="login-header">
            <strong>Hello User</strong>
            <div className="login-sub">To access your Meesho account</div>
            <button onClick={handleSignUpClick} className="login-btn">
              Sign Up
            </button>
          </div>

          <div
            className="login-item"
            onClick={() => navigate("/component/Cartpage")}
          >
            <i className="fas fa-lock"></i> My Orders
          </div>

          <div className="login-delete">Delete Account</div>
        </div>
      )}

      {/* ✅ CSS */}
      <style>
        {`
          .profile-menu {
            position: relative;
            display: inline-block;
          }

          .profile-btn {
            display: flex;
            align-items: center;
            gap: 6px;
            font-weight: 500;
            color: #000;
          }

          .login {
            position: absolute;
            top: 100%;
            margin-right:40px,
            width: 260px;
            background: #fff;
            box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
            border-radius: 0.5rem;
            z-index: 1000;
            max-width: calc(100vw - 20px);
          }

          /* 💻 Tablet & Laptop - Center below Profile */
          @media (max-width: 991px) {
            .login {
              left: 60%;
              transform: translateX(-10%);
            }
          }

          /* 📱 Mobile - Stick to right side */
          @media (max-width: 576px) {
            .login {
              right: 0;
              left:20px;
              transform: none;
              width: 220px;
            }
          }

          .login-header {
            padding: 1rem;
            border-bottom: 1px solid #eee;
          }
          .login-sub {
            font-size: 0.85rem;
            color: #6c757d;
          }
          .login-btn {
            width: 100%;
            background: #9c27b0;
            color: #fff;
            border: none;
            border-radius: 0.25rem;
            padding: 0.5rem;
            font-weight: 600;
            margin-top: 0.5rem;
          }
          .login-item {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid #eee;
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
          }
          .login-delete {
            padding: 0.75rem 1rem;
            color: #dc3545;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default ProfileMenu;
