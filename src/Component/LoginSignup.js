import React, { useState } from "react";
import "./Styles.css";

const LoginSignup = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authMethod, setAuthMethod] = useState("mobile");
  const [otpSent, setOtpSent] = useState(false); // Track if OTP is sent
  const [otp, setOtp] = useState(""); // Store OTP entered by the user
  const [otpValid, setOtpValid] = useState(false); // Track if OTP is valid

  const handleToggle = () => setIsChecked(!isChecked);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  // Handle OTP request and simulate OTP sending
  const handleOtpRequest = () => {
    alert(`OTP sent to your ${authMethod}!`);
    setOtpSent(true); // Set OTP sent status to true
    closeModal();
  };

  // Validate OTP entered by the user
  const handleOtpValidation = () => {
    if (otp === "123456") { // Assuming '123456' is the correct OTP for testing
      setOtpValid(true);
      alert("OTP validated successfully!");
    } else {
      setOtpValid(false);
      alert("Invalid OTP, please try again.");
    }
  };

  return (
    <div className="main">
      <input
        type="checkbox"
        id="chk"
        aria-hidden="true"
        checked={isChecked}
        onChange={handleToggle}
      />

      {/* Signup Form */}
      <div className={`signup ${isChecked ? "scaled" : ""}`}>
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            type="number"
            name="mobile"
            placeholder="Mobile Number"
            required
          />
          <div>
            <button type="submit">Register</button>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
            <span style={{ cursor: "pointer", color: "#4a90e2" }} onClick={openModal}>One Time User Register</span>
          </div>
        </form>
      </div>

      {/* Login Form */}
      <div className={`login ${!isChecked ? "active" : ""}`}>
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button>Login</button>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
            <span style={{ cursor: "pointer", color: "#4a90e2" }} onClick={openModal}>One Time User Register</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" ,cursor: "pointer", color: "#4a90e2" }}>forgot password ?</div>
        </form>
      </div>

      {/* Modal */}
      {isModalOpen && !otpSent && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Choose OTP Method</h2>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <input
                  type="radio"
                  name="auth-method"
                  value="mobile"
                  checked={authMethod === "mobile"}
                  onChange={() => setAuthMethod("mobile")}
                />
                Mobile
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <input
                  type="radio"
                  name="auth-method"
                  value="email"
                  checked={authMethod === "email"}
                  onChange={() => setAuthMethod("email")}
                />
                Email
              </label>
            </div>
            <input
              type={authMethod === "mobile" ? "number" : "email"}
              placeholder={authMethod === "mobile" ? "Enter Mobile Number" : "Enter Email"}
              required
            />
            <button onClick={handleOtpRequest}>Get OTP</button>
          </div>
        </div>
      )}

      {/* OTP Validation Screen */}
      {otpSent && !otpValid && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setOtpSent(false)}>&times;</span>
            <h2>Enter OTP</h2>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button onClick={handleOtpValidation}>Validate OTP</button>
          </div>
        </div>
      )}

      {/* OTP Success Screen */}
      {otpValid && (
        <div className="modal">
          <div className="modal-content">
            <h2>OTP Validated Successfully!</h2>
            <button onClick={() => setOtpValid(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
