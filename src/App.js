import "./App.css";
import CarsList from "./components/CarsList/CarsList";
import Nav from "./components/Nav/Nav";
import CarForm from "./components/car-form/CarForm";
import { useState } from "react";

const DUMMUY_CAR_DATA = [
  {
    id: "02",
    carImageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/97/Lamborghini_Aventador_LP700-4_Orange.jpg",
    carDescription:
      "Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.",
  },
];
function App() {
  const [cars, setEnteredCars] = useState(DUMMUY_CAR_DATA);

  const addCarsHanlder = (allcars) => {
    setEnteredCars((prevCars) => {
      return [allcars, ...prevCars];
    });
  };

  return (
    <div className="App">
      <Nav />
      <CarForm onAddCars={addCarsHanlder} className="car-form" />
      <CarsList carDataList={cars} />
    </div>
  );
}

export default App;
