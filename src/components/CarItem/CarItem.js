import React from "react";
import "./CarItem.css";

function CarItem(props) {
  return (
    <div className="car-item">
      <div className="car-image">
        <img alt="tesla" src={props.allCars.carImage} />
      </div>
      <div className="car-description">{props.allCars.carDescription}</div>
      <div className="car-button">Button</div>
    </div>
  );
}

export default CarItem;
