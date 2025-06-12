// import { useState } from "react";
// import "./SignIn.css";
// import axios from "axios";

// export const SignIn = ({ isLogin, onClose }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log("Form submitted:", formData);
//     onClose();

//     try {
//       const response = await axios.post(
//         "http://localhost:3055/users/addUser",
//         formData
//       );

//       console.log(response.data);
//       console.log(formData);
//     } catch (error) {
//       console.error("There was an error creating the user:", error);
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="pop-up">
//         <button className="close-btn" onClick={onClose}>
//           &times;
//         </button>

//         <h1>{isLogin ? "Login" : "Sign Up"}</h1>

//         <form onSubmit={handleSubmit} className="form-content">
//           {!isLogin && (
//             <input
//               type="text"
//               name="firstName"
//               placeholder="Firs tName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//           )}
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />

//           {!isLogin && (
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//           )}

//           <button type="submit" className="submit-btn">
//             {isLogin ? "Login" : "Sign Up"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import "./SignIn.css";
import axios from "axios";

interface SignInProps {
  onClose: () => void;
}

export const SignIn: React.FC<SignInProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Form submitted:", formData);
    onClose();

    try {
      const response = await axios.post(
        "http://localhost:3055/users/addUser",
        formData
      );

      console.log(response.data);
    } catch (error) {
      console.error("There was an error creating the user:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="pop-up">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>

        <h1>Sign Up</h1>

        <form onSubmit={handleSubmit} className="form-content">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
