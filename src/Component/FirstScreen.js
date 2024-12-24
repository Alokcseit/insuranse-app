import React from 'react';
import { Link } from 'react-router-dom';
import RightSideBar from './RightSideBar';  // Import the RightSideBar
import "./FirstScreen.css";

function FirstScreen() {
  return (
    <div className="home-container">
      {/* Top Navbar with Logo */}
      <div className="navbar">
        <div className="logo">Logo</div>
      </div>

      {/* Second Navbar with Navigation Links */}
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/aboutus" className="nav-link">About Us</Link>
        <Link to="/contactus" className="nav-link">Contact Us</Link>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome to Our Website</h1>
        <p>Your journey starts here!</p>
      </div>

      {/* Right Sidebar with Insurance Dropdown and Login Button */}
      <RightSideBar />  {/* Here we add the RightSideBar component */}
    </div>
  );
}

export default FirstScreen;
