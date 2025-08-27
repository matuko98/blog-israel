import React from "react";
import "./MitzpeRamon.css";
import { MitzpeAttraction } from "./MitzpeAttraction";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MitzpeReview } from "./MitzpeReview";
export const MitzpeRamon = () => {
  return (
    <div className="mitzpe-page">
      <div className="mitzpe-section1">
        <img src="/img/mitzpe-bg2.jpg" alt="" />
        <h1>Tours From Mitzpe Ramon</h1>
      </div>
      <div className="mitzpe-section2">
        <p>
          <span>Mitzpe Ramon</span> On the edge of the breathtaking Ramon Crater
          in the Negev Desert, lies the peaceful southern Israeli town of Mitzpe
          Ramon. This famous landmark must be on your bucket list during your
          vacation to Israel – read below to discover memorable activities,
          where to stay, and more. Whether you’re marveling at the endless sea
          of stars in the night sky, or enjoying an exhilarating jeep ride –
          breeze blowing through your hair – Mitzpe Ramon is truly one of the
          most impressive sites in southern Israel
        </p>
      </div>
      <div className="mitzpe-section3">
        <h2>Mitzpe Ramon Attration To Explore</h2>
        {MitzpeAttraction.map((e, index) => (
          <div key={index} className="mitzpe-places">
            <h2>{e.name}</h2>
            <img src={e.image} alt={e.image} />
            <p>{e.text}</p>
          </div>
        ))}
      </div>
      <div className="mitzpe-section4">
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
          {MitzpeReview.map((e, index) => (
            <div key={index} className="mitzpe-cards">
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
