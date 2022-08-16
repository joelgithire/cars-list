import "./App.css";
import CarsList from "./components/CarsList/CarsList";
import Nav from "./components/Nav/Nav";
import CarForm from "./components/car-form/CarForm";

function App() {
  const allCarFormData = (enteredCarData) => {
    const carData = {
      ...enteredCarData,
      id: Math.random().toString(),
    };
    console.log(carData);
  };

  return (
    <div className="App">
      <Nav />
      <CarForm onAddCars={allCarFormData} className="car-form" />
      <CarsList />
    </div>
  );
}

export default App;
