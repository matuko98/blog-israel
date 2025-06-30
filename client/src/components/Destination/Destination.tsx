import React from "react";
import "./Destination.css";
import citysData from "../../Data/Citys.js";
import { Link } from "react-router-dom";

// Define the type for a city
interface City {
  name: string;
  image: string;
}

const typedCitysData: City[] = citysData;

export const Destination = () => {
  return (
    <div className="destination-grid">
      {typedCitysData.map((city, index) => (
        <Link
          to={`/city/${city.name.toLowerCase().replace(/\s+/g, "-")}`}
          className="destination-card"
          key={index}
        >
          <img src={city.image} alt={city.name} className="destination-image" />
          <h3 className="destination-name">{city.name}</h3>
        </Link>
      ))}
    </div>
  );
};
