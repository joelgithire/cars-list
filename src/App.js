import "./App.css";
import CarsList from "./components/CarsList/CarsList";
import Nav from "./components/Nav/Nav";
import CarForm from "./components/car-form/CarForm";

function App() {
  return (
    <div className="App">
      <Nav />
      <CarForm className="car-form" />
      <CarsList />
    </div>
  );
}

export default App;
