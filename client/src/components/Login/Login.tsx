import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

interface LoginProps {
  onClose: () => void;
  onLoginSuccess: (name: string, email: string) => void; // ⬅️ updated
}

export const Login: React.FC<LoginProps> = ({ onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3055/users/signin", {
        email,
        password,
      });

      if (res.data && res.data.user && res.data.user.name) {
        onLoginSuccess(res.data.user.name, res.data.user.email); // ✅ pass both name and email
        onClose();
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="login-popup">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h1>Login</h1>
        <form className="form-content" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
