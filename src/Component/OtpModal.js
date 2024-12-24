import React, { useState } from "react";

const OtpModal = ({ closeModal, authMethod, setAuthMethod, setOtpSent, setOtp }) => {
  const [authInput, setAuthInput] = useState("");

  const handleOtpRequest = () => {
    alert(`OTP sent to your ${authMethod}!`);
    setOtpSent(true);
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
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
          value={authInput}
          onChange={(e) => setAuthInput(e.target.value)}
          required
        />
        <button onClick={handleOtpRequest}>Get OTP</button>
      </div>
    </div>
  );
};

export default OtpModal;
