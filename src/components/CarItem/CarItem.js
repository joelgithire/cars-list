import React, { useState } from "react";
import "./CarItem.css";

function CarItem(props) {
  const [carName, setCarName] = useState("");
  const setCarNameHandler = () => {
    setCarName("Lambo");
  };

  return (
    <div className="car-item">
      <div className="car-image">
        <div className="car-name">{carName}</div>
        <img alt="tesla" src={props.allCars.carImage} />
      </div>
      <div className="car-description">{props.allCars.carDescription}</div>
      <div className="car-button" onClick={setCarNameHandler}>
        Button
      </div>
    </div>
  );
}

export default CarItem;
