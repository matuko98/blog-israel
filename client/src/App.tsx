import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SignIn } from "./components/SignIn/SignIn";
import { Login } from "./components/Login/Login";
import { Destination } from "./components/Destination/Destination";
import { Faq } from "./components/Faq/Faq";
import { Haifa } from "./pages/Haifa/Haifa";
import { Eilat } from "./pages/Eilat/Eilat";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/city" element={<Destination />} />
        <Route path="faq" element={<Faq />} />
        <Route path="/city/hifa" element={<Haifa />} />
        <Route path="/city/eilat" element={<Eilat />} />
      </Routes>
    </>
  );
}

export default App;
