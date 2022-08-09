import React from "react";
import "./CarsList.css";
import CarItem from "../CarItem/CarItem";

const DUMMUY_CAR_DATA = {
  carImage:
    "https://upload.wikimedia.org/wikipedia/commons/9/97/Lamborghini_Aventador_LP700-4_Orange.jpg",
  carDescription:
    "Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.",
};

function CarsList(props) {
  return (
    <div className="car-list">
      <CarItem allCars={DUMMUY_CAR_DATA}></CarItem>
    </div>
  );
}

export default CarsList;
