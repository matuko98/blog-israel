import React from "react";
import "./jerusalem.css";
import { jerusalemAttraction } from "./JerusalemAttraction";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { JerusalemReview } from "./JerusalemReview";
export const Jerusalem = () => {
  return (
    <div className="jerusalem-page">
      <div className="jerusalem-section1">
        <img src="/img/jerusalem-wall.jpg" alt="" />
        <h1>Tours From Jerusalem</h1>
      </div>
      <div className="jerusalem-section2">
        <p>
          <span>Jerusalem </span>is a top tourist destination, centered on its
          ancient Old City, a UNESCO World Heritage Site divided into four
          quarters: Jewish, Christian, Muslim, and Armenian, each offering
          unique historical and religious sites. Key attractions include the
          Western Wall, the Church of the Holy Sepulchre, the Dome of the Rock,
          the Via Dolorosa, and the panoramic Mount of Olives. Visitors can also
          explore the Israel Museum, the Yad Vashem Holocaust Remembrance
          Center, the vibrant Mahane Yehuda Market, and the archaeological City
          of David
        </p>
      </div>
      <div className="jerusalem-section3">
        <h2>Jerusalem sites and attraction</h2>
        {jerusalemAttraction.map((e, index) => (
          <div key={index} className="jerusalem-attraction">
            <h2>{e.name}</h2>
            <img src={e.image} alt={e.image} />
            <p>{e.text}</p>
          </div>
        ))}
      </div>
      <div className="jerusalem-section4">
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
          {JerusalemReview.map((e, index) => (
            <div key={index} className="jerusalem-review-cards">
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
