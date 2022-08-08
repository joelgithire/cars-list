import "./App.css";
import CarsList from "./components/CarsList/CarsList";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <CarsList />
      <CarsList />
    </div>
  );
}

export default App;
