import React from "react";
import "./TelAviv.css";
import { TelAvivAttraction } from "./TelAvivAttraction";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TelAvivReview } from "./TelAvivReview";
export const TelAviv = () => {
  return (
    <div className="tel-aviv-page">
      <div className="tel-aviv-section1">
        <img src="/img/tel-aviv-bg2.jpg" alt="" />
        <h1>Tours From Tel Aviv</h1>
      </div>
      <div className="tel-aviv-section2">
        <p>
          <span>Tel Aviv</span>is Israel’s cultural and commercial capital.
          Named “The Mediterranean Capital of Cool” by the New York Times, Tel
          Aviv is a city with a savvy attitude and cultural astuteness. “The
          city which never sleeps” is a center for nightlife, cuisine, culture,
          and liberalism. The city is bordered on one side by the Mediterranean
          and long stretches of sandy beaches, and on the other by glass towers
          housing technology companies in what is considered to be the world’s
          second most important hi-tech area.Prominent museums, restored
          neighborhoods such as the ancient Port of Jaffa, Neve Tzedek, and the
          White City of Bauhaus-style buildings, and a young and diverse
          population, make Tel Aviv a city that you can never stop exploring.
          The best way to see the hidden corners of this unique city is with a
          tour of Tel Aviv.
        </p>
      </div>
      <div className="tel-aviv-section3">
        <h2>Tel Aviv Attraction To Explore</h2>
        {TelAvivAttraction.map((e, index) => (
          <div key={index} className="tel-aviv-places">
            <h2>{e.name}</h2>
            <img src={e.image} alt={e.image} />
            <p>{e.text}</p>
          </div>
        ))}
      </div>
      <div className="tel-aviv-section4">
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
          {TelAvivReview.map((e, index) => (
            <div key={index} className="tel-aviv-review-card">
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
