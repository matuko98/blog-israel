import React from "react";
import "./Home.css";
import { Destination } from "../../components/Destination/Destination";
import { Faq } from "../../components/Faq/Faq";
export const Home = () => {
  return (
    <div className="home-page">
      <section className="section1">
        <h1>
          Welcome To Israel Tourist Guide <br /> Plan Your Vacation Now
        </h1>
      </section>
      <section className="section2">
        <h2>Explore Israel Top Destination</h2>
        <Destination />
      </section>
      <section className="section3">
        <Faq />
      </section>
    </div>
  );
};
