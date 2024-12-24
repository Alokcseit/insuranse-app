import React from 'react';
import './Navbar.css'; // Importing the same CSS file

const SecondNav = () => {
  return (
    <nav className="navbar-second">
      <select name="Insurance" id="insurance">
        <option value="">Insurance</option>
        <option value="health">Health Insurance</option>
        <option value="life">Life Insurance</option>
        <option value="car">Car Insurance</option>
        <option value="home">Home Insurance</option>
      </select>
      <select name="Loan" id="loan">
        <option value="">Loan</option>
        <option value="personal">Personal Loan</option>
        <option value="home">Home Loan</option>
        <option value="car">Car Loan</option>
        <option value="education">Education Loan</option>
      </select>
    </nav>
  );
};

export default SecondNav;
