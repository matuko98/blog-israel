// import "./Navbar.css";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { User, Menu } from "lucide-react";
// import flag from "/img/flag-israel.jpg";
// import { SignIn } from "../SignIn/SignIn";
// import { Login } from "../Login/Login";

// function Navbar(user) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownMenu, setDropdownMenu] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const [showModal, setShowModal] = useState(false);
//   const [isLoginMode, setIsLoginMode] = useState(false);

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setDropdownMenu(false);
//   };

//   const openForm = (mode) => {
//     setIsLoginMode(mode === "login");
//     setShowModal(true);
//     setDropdownMenu(false);
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-logo">
//           <h1>ITG</h1>
//           <img src={flag} alt="Israel Flag" />
//         </div>

//         <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//           <Menu />
//         </div>

//         <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/blog">Blog</Link>
//           </li>
//           <li>
//             <Link to="/popular">News</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//         </ul>

//         <div className="user-profile">
//           <button
//             className="user-picture"
//             onClick={() => setDropdownMenu(!dropdownMenu)}
//           >
//             <User className="user-icon" />
//           </button>

//           {dropdownMenu && (
//             <div className="user-menu">
//               {isLoggedIn ? (
//                 <>
//                   <span>hello {user.name}</span>
//                   <Link to="/profile" onClick={() => setDropdownMenu(false)}>
//                     Profile
//                   </Link>
//                   <button onClick={handleLogout}>Logout</button>
//                 </>
//               ) : (
//                 <>
//                   <button onClick={() => openForm("signup")}>Sign Up</button>
//                   <button onClick={() => openForm("login")}>Login</button>
//                 </>
//               )}
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Modal rendered outside nav */}
//       {showModal && (
//         <SignIn isLogin={isLoginMode} onClose={() => setShowModal(false)} />
//       )}
//     </>
//   );
// }

// export default Navbar;

import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Menu } from "lucide-react";
import flag from "/img/flag-israel.jpg";
import { SignIn } from "../SignIn/SignIn";
import { Login } from "../Login/Login";

interface NavbarProps {
  name?: string;
}

function Navbar({ name }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setDropdownMenu(false);
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
                  <span>hello {name}</span>
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

      {/* Pop-up component based on login/signup */}
      {showModal &&
        (isLoginMode ? (
          <Login onClose={closeModal} />
        ) : (
          <SignIn onClose={closeModal} />
        ))}
    </>
  );
}

export default Navbar;
