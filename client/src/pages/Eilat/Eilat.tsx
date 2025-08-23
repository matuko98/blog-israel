import React from "react";
import "./Eilat.css";
import { eilatAttraction } from "./EilatAttraction";
import { eilatReview } from "./EilatTourist";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Eilat = () => {
  return (
    <div className="eilat-page">
      <section className="eilat-section1">
        <img src="/img/eilatbg2.jpg" alt="" />
        <h1>Tours From Eilat</h1>
      </section>
      <section className="eilat-section2">
        <p>
          <span>Eilat</span> is Israel's southernmost city, located at the
          northern tip of the Red Sea. It has a population of about 53,000 and
          serves as a major port and resort destination. The city lies in the
          Arava valley, at the edge of the Negev desert. Eilat borders Egypt’s
          Taba, Jordan’s Aqaba, and is near Saudi Arabia’s Haql. It is popular
          with both domestic and international tourists visiting Israel.
        </p>
      </section>
      <section className="eilat-section3">
        <h2>Eilat sites and attractions</h2>
        {eilatAttraction.map((e, index) => (
          <div key={index} className="eilat-attraction">
            <h2>{e.name}</h2>
            <img src={e.image} alt={e.name} />
            <p>{e.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
};
