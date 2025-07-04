import React from "react";
import "./Home.css";
import { Destination } from "../../components/Destination/Destination";
export const Home = () => {
  return (
    <div className="home-page">
      <section className="section1">
        <h1>
          Welcome To Israel Tourist Guide <br /> Plan Your Vacation Now
        </h1>
        <div className="buttons">
          <button> Top 5 Places</button>
          <button>Help</button>
        </div>
      </section>
      <section className="section2">
        <h2>Explore Israel Top Citys</h2>
        <Destination />
      </section>
    </div>
  );
};
