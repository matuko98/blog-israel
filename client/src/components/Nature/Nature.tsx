// import React from "react";
// import "./Nature.css";
// export const Nature = () => {
//   return <div className="nature-page"></div>;
// };

import React from "react";
import "./Nature.css";

export const Nature = () => {
  const topPlaces = [
    {
      name: "Ein Gedi Nature Reserve",
      region: "Dead Sea",
      bestSeason: "Spring & Autumn",
      image:
        "https://en.parks.org.il/wp-content/themes/joomi/inc/imgp.php?src=https://static-en.parks.org.il/wp-content/uploads/2019/05/5ce52e7d25240.jpg&width=1176&co=8&q=60",
    },
    {
      name: "Banias Waterfall",
      region: "Golan Heights",
      bestSeason: "Winter & Spring",
      image:
        "https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2012/05/banias-nature-reserve-israel-scaled.jpg?resize=1536%2C1024&ssl=1",
    },
    {
      name: "Ramon Crater",
      region: "Negev Desert",
      bestSeason: "Spring & Autumn",
      image:
        "https://igoogledisrael.com/wp-content/uploads/2015/08/ramoncrateredge.jpg",
    },
    {
      name: "Hula Valley",
      region: "Northern Israel",
      bestSeason: "Autumn (Bird Migration)",
      image:
        "https://igoogledisrael.com/wp-content/uploads/2012/10/Hula-valley_bs-e1523987819425.jpg",
    },
    {
      name: "Mount Meron",
      region: "Upper Galilee",
      bestSeason: "Spring & Summer",
      image:
        "https://israelsgoodname.blog/wp-content/uploads/2014/11/mount-meron.jpg?w=500",
    },
    {
      name: "Caesarea National Park",
      region: "Mediterranean Coast",
      bestSeason: "Spring & Autumn",
      image:
        "https://static-en.parks.org.il/wp-content/uploads/2017/08/DSC_0311.jpg",
    },
    {
      name: "Agamon Hula",
      region: "Northern Israel",
      bestSeason: "Winter & Spring",
      image:
        "https://igoogledisrael.com/wp-content/uploads/2012/10/Hula-valley_bs-e1523987819425.jpg",
    },
    {
      name: "Ein Avdat",
      region: "Negev Desert",
      bestSeason: "Spring & Autumn",
      image:
        "https://static-en.parks.org.il/wp-content/uploads/2017/08/DSC_4566.jpg",
    },
  ];

  const wildlife = [
    {
      name: "Nubian Ibex",
      type: "Mammal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b2/PikiWiki_Israel_38769_Male_Ibex.jpg",
    },
    {
      name: "Dorcas Gazelle",
      type: "Mammal",
      image:
        "https://www.marwell.org.uk/wp-content/uploads/2021/06/flickr-credit-martin-dorcas-gazelle.jpg",
    },
    {
      name: "Chukar Partridge",
      type: "Bird",
      image:
        "https://www.allaboutbirds.org/guide/assets/photo/39398791-480px.jpg",
    },
    {
      name: "Griffon Vulture",
      type: "Bird",
      image:
        "https://images.birdfact.com/production/griffon-vulture.jpg?w=1800&h=1350&q=80&auto=format&fit=crop&dm=1617724028&s=b31a5259e9e3cfb87f3938f0d1276336",
    },
    {
      name: "Sea Turtle",
      type: "Marine",
      image:
        "https://www.fisheries.noaa.gov/s3//2025-02/sea-turtle-swimming-reef-credit-shutterstock.jpg",
    },
    {
      name: "Red Fox",
      type: "Mammal",
      image: "https://www.jpost.com/httphandlers/showimage.ashx?id=296752",
    },
  ];

  const activities = [
    {
      name: "Hiking",
      icon: "https://beringtravel.img.eurofunv2-prod.px.at/w_940,h_499,q_80,v_d30963,hash_7011c2/ddcijcnkv/image/upload/v1720970886/bering-travel/inspiration/vandring/trekking-og-vandring-hiker.jpg",
      description:
        "Explore trails in deserts, mountains, and forests across Israel.",
    },
    {
      name: "Birdwatching",
      icon: "https://green-backyard.com/wp-content/uploads/2024/05/1-Birdwatching-Ethics-Etiquette-Dos-and-Donts.jpg",
      description:
        "Visit Hula Valley and other reserves to see rare and migratory birds.",
    },
    {
      name: "Water Activities",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1g4-tWKtUAQPHzO0B3Vr_WxuwxzBV4vvNeg&s",
      description: "Kayak, swim, and float in rivers, lakes, and the Dead Sea.",
    },
    {
      name: "Desert Tours",
      icon: "https://www.marrakech-desert-trips.com/wp-content/uploads/2023/07/Morocco-desert-tour-from-Marrakech-4-days.jpg",
      description:
        "Experience jeep tours, camel rides, and stargazing in the Negev desert.",
    },
  ];

  const travelTips = [
    {
      tip: "Stay Hydrated",
      description:
        "Carry water, especially when hiking in the desert or mountains.",
    },
    {
      tip: "Wear Proper Shoes",
      description:
        "Hiking boots or sturdy shoes are essential for most trails.",
    },
    {
      tip: "Respect Wildlife",
      description:
        "Observe animals from a distance and do not feed them. Protect nature.",
    },
    {
      tip: "Check Weather",
      description:
        "Weather can change quickly in desert and mountainous areas.",
    },
  ];

  return (
    <div className="nature-page">
      {/* Section 1: Top Nature Destinations */}
      <section className="section">
        <h1>🌿 Top Nature Destinations in Israel</h1>
        <div className="places-grid">
          {topPlaces.map((place, idx) => (
            <div className="place-card" key={idx}>
              <img src={place.image} alt={place.name} />
              <div className="place-content">
                <h2>{place.name}</h2>
                <div className="place-tags">
                  <span className="tag">{place.region}</span>
                  <span className="tag">{place.bestSeason}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Wildlife */}
      <section className="section">
        <h1>🦎 Wildlife in Israel</h1>
        <div className="places-grid">
          {wildlife.map((animal, idx) => (
            <div className="place-card" key={idx}>
              <img src={animal.image} alt={animal.name} />
              <div className="place-content">
                <h2>{animal.name}</h2>
                <p>Type: {animal.type}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Outdoor Adventures */}
      <section className="section">
        <h1>🏞️ Outdoor Adventures</h1>
        <div className="activities-grid">
          {activities.map((act, idx) => (
            <div className="activity-card" key={idx}>
              <img
                src={act.icon} // Use the image URL
                alt={act.name}
                className="activity-icon"
              />
              <h2>{act.name}</h2>
              <p>{act.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Travel Tips */}
      <section className="section">
        <h1>📝 Travel Tips & Eco-Friendly Practices</h1>
        <div className="activities-grid">
          {travelTips.map((tip, idx) => (
            <div className="activity-card" key={idx}>
              <h2>{tip.tip}</h2>
              <p>{tip.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
