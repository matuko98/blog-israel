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
      <div className="eilat-review">
        <h2>What people think...</h2>
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={4000}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {eilatReview.map((e, index) => (
            <div key={index} className="eilat-recommendation-card">
              <h4>{e.name}</h4>
              <h5>{e.place}</h5>
              <p className="stars">{e.star}</p>
              <p>{e.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
