import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, Menu } from "lucide-react";
import flag from "/img/flag-israel.jpg";
import { SignIn } from "../SignIn/SignIn";
import { Login } from "../Login/Login";
import axios from "axios";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const [showModal, setShowModal] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);

  // 🔄 On refresh, restore login state if needed
  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    const savedEmail = localStorage.getItem("userEmail");
    if (savedName && savedEmail) {
      setIsLoggedIn(true);
      setUserName(savedName);
      setUserEmail(savedEmail);
    }
  }, []);

  const handleLoginSuccess = (name: string, email: string) => {
    setIsLoggedIn(true);
    setUserName(name);
    setUserEmail(email);

    // Save to localStorage
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    setShowModal(false);
  };

  const handleLogout = async () => {
    try {
      if (userEmail) {
        await axios.post("http://localhost:3055/users/logout", {
          email: userEmail,
        });
      }

      // Clear all auth-related data
      setIsLoggedIn(false);
      setUserName(null);
      setUserEmail(null);
      setDropdownMenu(false);
      localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const openForm = (mode: "login" | "signup") => {
    setIsLoginMode(mode === "login");
    setShowModal(true);
    setDropdownMenu(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>ITG</h1>
          <img src={flag} alt="Israel Flag" />
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu />
        </div>

        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/popular">News</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <div className="user-profile">
          <button
            className="user-picture"
            onClick={() => setDropdownMenu(!dropdownMenu)}
          >
            <User className="user-icon" />
          </button>

          {dropdownMenu && (
            <div className="user-menu">
              {isLoggedIn ? (
                <>
                  <span>Hello, {userName}</span>
                  <Link to="/profile" onClick={() => setDropdownMenu(false)}>
                    Profile
                  </Link>
                  <button onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <>
                  <button onClick={() => openForm("signup")}>Sign Up</button>
                  <button onClick={() => openForm("login")}>Login</button>
                </>
              )}
            </div>
          )}
        </div>
      </nav>

      {showModal &&
        (isLoginMode ? (
          <Login onClose={closeModal} onLoginSuccess={handleLoginSuccess} />
        ) : (
          <SignIn onClose={closeModal} />
        ))}
    </>
  );
}

export default Navbar;
