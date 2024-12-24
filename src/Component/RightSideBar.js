import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RightSideBar.css'; // CSS file for styling

function RightSideBar() {
  const [dropdowns, setDropdowns] = useState({
    insurance: false,
    loan: false,
  });

  const toggleDropdown = (type) => {
    setDropdowns((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const closeDropdowns = () => {
    setDropdowns({ insurance: false, loan: false });
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Close dropdowns if clicking outside
      if (!event.target.closest('.dropdown')) {
        closeDropdowns();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="right-sidebar">
      {/* First Row: Insurance and Login */}
      <div className="side-by-side">
        <div className="dropdown">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown('insurance');
            }}
            className="dropdown-button"
          >
            Insurance
          </button>
          {dropdowns.insurance && (
            <div className="dropdown-content">
              <Link to="/life-insurance" className="dropdown-link">
                Life Insurance
              </Link>
              <Link to="/health-insurance" className="dropdown-link">
                Health Insurance
              </Link>
              <Link to="/car-insurance" className="dropdown-link">
                Car Insurance
              </Link>
            </div>
          )}
        </div>
        <Link to="/login" className="login-button">
          Login
        </Link>
      </div>

      {/* Second Row: Loan and Login */}
      <div className="side-by-side">
        <div className="dropdown">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown('loan');
            }}
            className="dropdown-button"
          >
            Loan
          </button>
          {dropdowns.loan && (
            <div className="dropdown-content">
              <Link to="/home-loan" className="dropdown-link">
                Home Loan
              </Link>
              <Link to="/personal-loan" className="dropdown-link">
                Personal Loan
              </Link>
              <Link to="/education-loan" className="dropdown-link">
                Education Loan
              </Link>
            </div>
          )}
        </div>
        <Link to="/login" className="login-button">
          Login
        </Link>
      </div>
    </div>
  );
}

export default RightSideBar;
