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
import { DeadSea } from "./pages/DeadSea/DeadSea";
import { Jerusalem } from "./pages/Jerusalem/Jerusalem";
import { MitzpeRamon } from "./pages/MitzpeRamon/MitzpeRamon";
import { TelAviv } from "./pages/TelAviv/TelAviv";
import { Blog } from "./pages/Blog/Blog";
import { Nature } from "./components/Nature/Nature";
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
        <Route path="/city/dead-sea" element={<DeadSea />} />
        <Route path="/city/jerusalem" element={<Jerusalem />} />
        <Route path="/city/mitzpe-ramon" element={<MitzpeRamon />} />
        <Route path="/city/tel-aviv" element={<TelAviv />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
