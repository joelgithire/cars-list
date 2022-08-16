import React from "react";
import "./CarItem.css";

function CarItem({ carName, carImageUrl, carDescription }) {
  return (
    <div className="car-item">
      <div className="car-image">
        <div className="car-name">{carName}</div>
        <img alt="tesla" src={carImageUrl} />
      </div>
      <div className="car-description">{carDescription}</div>
    </div>
  );
}

export default CarItem;
