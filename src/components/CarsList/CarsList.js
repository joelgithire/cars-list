import React from "react";
import "./CarsList.css";
import CarItem from "../CarItem/CarItem";

function CarsList({ carDataList }) {
  return (
    <div className="car-list">
      {carDataList.map((cars) => (
        <CarItem
          key={cars.id}
          carName={cars.carName}
          carImageUrl={cars.carImageUrl}
          carDescription={cars.carDescription}
        />
      ))}
    </div>
  );
}

export default CarsList;
