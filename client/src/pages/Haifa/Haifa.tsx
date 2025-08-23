import React from "react";
import "./Haifa.css";
import { haifaAttration } from "./HaifaAttraction";
import { HaifaTourist } from "./HaifaTourist";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Haifa = () => {
  return (
    <div className="haifa-page">
      <div className="haifa-section1">
        <img src="/img/haifa2.jpg" alt="" />
        <h1>Tours From Haifa</h1>
      </div>

      <div className="haifa-section2">
        <p>
          <span>Haifa</span> is Israel’s third-largest city, Israel’s chief port
          and home to 400,000. Draped around the slopes of biblical Mount
          Carmel, it is a 100-year-old city whose importance burgeoned in the
          1920’s and 1930’s as Britain followed its League of Nations mandate
          over Palestine to create a Jewish homeland. The bustling lower Carmel
          neighborhood is the port area and where much of Haifa’s daily business
          is conducted. The slopes of central Carmel are largely residential,
          and the mountaintop Upper Carmel is home to museums, many hotels and
          shops. Transportation from the top to the bottom of Mount Carmel is
          achieved by the Carmelit subway, the Bat Ganim cable car and, of
          course, by road.
        </p>

        <div className="haifa-section2-places">
          <h2>Haifa's sites and attractions</h2>
          {haifaAttration.map((e, index) => (
            <div key={index} className="haifa-attraction">
              <h2>{e.name}</h2>
              <img src={e.image} alt={e.name} />
              <p>{e.text}</p>
            </div>
          ))}
        </div>
        <div className="haifa-section3">
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
            {HaifaTourist.map((e, index) => (
              <div key={index} className="haifa-recommendation-card">
                <h4>{e.name}</h4>
                <h5>{e.place}</h5>
                <p className="stars">{e.star}</p>
                <p>{e.text}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
