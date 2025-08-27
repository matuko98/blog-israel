import React from "react";
import "./DeadSea.css";
import { deadSeaAttraction } from "./DeadSeaAttraction";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DeadSeaReview } from "./DeadSeaReview";

export const DeadSea = () => {
  return (
    <div className="deadsea-page">
      <div className="deadsea-section1">
        <img src="/img/dead-sea-cover.jpg" alt="" />
        <h1>Tours From Dead Sea</h1>
      </div>
      <div className="deadsea-section2">
        <p>
          <span>Dead Sea</span> Discover the most interesting places to visit in
          the Dead Sea on the map. Whether your are planning an exciting
          vacation in one of the most beautiful and mysterious places in the
          world, or want to know more about the geography and history of the
          lowest point on Earth, explore this fascinating area with us!
        </p>
        <div className="dead-sea-places">
          <h2>Dead Sea Attraction To Explore</h2>
          {deadSeaAttraction.map((e, index) => (
            <div key={index} className="dead-sea-attraction">
              <h2>{e.name}</h2>
              <img src={e.image} alt={e.name} />
              <p>{e.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="dead-sea-section3">
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
          {DeadSeaReview.map((e, index) => (
            <div key={index} className="dead-sea-cards">
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
