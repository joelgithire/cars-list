import "./App.css";
import CarsList from "./components/CarsList/CarsList";
import Nav from "./components/Nav/Nav";
import CarForm from "./components/car-form/CarForm";
import { useEffect, useState } from "react";
import axios from "axios";

const fetctchedResults = [];

function App() {
  const [cars, setEnteredCars] = useState(fetctchedResults);

  useEffect(() => {
    axios
      .get("https://cars-list-e51f7-default-rtdb.firebaseio.com/cars.json")
      .then((response) => {
        console.log(response.data);

        for (let key in response.data) {
          fetctchedResults.unshift({
            ...response.data[key],
            id: key,
          });
        }
      });
  });

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
