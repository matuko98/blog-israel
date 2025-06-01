// import "./Navbar.css";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// function Navbar() {
//   const [user, setUser] = useState(null);
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <h1>ITG</h1>
//       </div>
//       <div className="navbar-links">
//         <li>
//           <Link to={"/"}>Home</Link>
//         </li>
//         <li>
//           <Link to={"/blog"}>Blog</Link>
//         </li>
//         <li>
//           <Link to={"/populer"}> Most Populer</Link>
//         </li>
//         <li>
//           {" "}
//           <Link to={"/About"}>About</Link>
//         </li>
//       </div>
//       <div></div>
//     </nav>
//   );
// }

// export default Navbar;

import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null); // Placeholder for future user logic

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>ITG</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/popular">Most Popular</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
