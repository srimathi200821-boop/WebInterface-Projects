import React from "react";
import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    ["📏", "Length", "Meter, Kilometer, Centimeter"],
    ["⚖️", "Weight", "Kilogram, Gram, Pound"],
    ["🌡️", "Temperature", "Celsius, Fahrenheit, Kelvin"],
    ["⏱️", "Time", "Second, Minute, Hour"],
    ["📐", "Area", "m², km², cm²"],
    ["🧊", "Volume", "Liter, Milliliter, m³"],
    ["🚗", "Speed", "m/s, km/h, mph"],
    ["💾", "Data", "Byte, KB, MB, GB"]
  ];

  return (
    <div className="page">
      <h1>Conversion Categories</h1>
      <p>Choose a category to start converting.</p>

      <div className="category-grid">
        {categories.map((item, index) => (
          <Link
            to="/converter"
            className="category-card"
            key={index}
          >
            <div className="category-icon">{item[0]}</div>
            <h2>{item[1]}</h2>
            <p>{item[2]}</p>
            <span>Convert →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;