import React from "react";

const LoginForm = ({ isChecked, openModal }) => {
  return (
    <div className={`login ${!isChecked ? "active" : ""}`}>
      <form>
        <label htmlFor="chk" aria-hidden="true">
          Login
        </label>
        <input type="text" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button>Login</button>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
          <span style={{ cursor: "pointer", color: "#4a90e2" }} onClick={openModal}>
            One Time User Register
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
            cursor: "pointer",
            color: "#4a90e2",
            textDecoration: "underline",
          }}
          
        >
          forgot password ?
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
