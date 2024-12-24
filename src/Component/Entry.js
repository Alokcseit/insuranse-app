import React, { useState } from "react";
import "./Styles.css";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import OtpModal from "./OtpModal";


const Entry= () => {
  const [isChecked, setIsChecked] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authMethod, setAuthMethod] = useState("mobile");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpValid, setOtpValid] = useState(false);

  const handleToggle = () => setIsChecked(!isChecked);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="main">
      <input
        type="checkbox"
        id="chk"
        aria-hidden="true"
        checked={isChecked}
        onChange={handleToggle}
      />
      <SignupForm isChecked={isChecked} openModal={openModal} />
      <LoginForm isChecked={isChecked} openModal={openModal} />
      
      {/* OTP Modal for Registration */}
      {isModalOpen && !otpSent && (
        <OtpModal
          closeModal={closeModal}
          authMethod={authMethod}
          setAuthMethod={setAuthMethod}
          setOtpSent={setOtpSent}
          setOtp={setOtp}
        />
      )}

      {/* OTP Validation Modal */}
      {otpSent && !otpValid && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setOtpSent(false)}>
              &times;
            </span>
            <h2>Enter OTP</h2>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button onClick={() => setOtpValid(otp === "123456")}>Validate OTP</button>
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

export default Entry;
