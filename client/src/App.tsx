import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SignIn } from "./components/SignIn/SignIn";
import { Login } from "./components/Login/Login";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
