import React from "react";

const SignupForm = ({ isChecked, openModal }) => {
  return (
    <div className={`signup ${isChecked ? "scaled" : ""}`}>
      <form>
        <label htmlFor="chk" aria-hidden="true">
          Sign up
        </label>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="number" name="mobile" placeholder="Mobile Number" required />
        <div>
          <button type="submit">Register</button>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
          <span style={{ cursor: "pointer", color: "#4a90e2" }} onClick={openModal}>
            One Time User Register
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
