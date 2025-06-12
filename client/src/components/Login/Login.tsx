import React from "react";
import "./Login.css";

interface LoginProps {
  onClose: () => void;
}

export const Login: React.FC<LoginProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="login-popup">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h1>Login</h1>
        <form className="form-content">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
