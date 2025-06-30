import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SignIn } from "./components/SignIn/SignIn";
import { Login } from "./components/Login/Login";
import { Destination } from "./components/Destination/Destination";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/city" element={<Destination />} />
      </Routes>
    </>
  );
}

export default App;
