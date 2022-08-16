import React, { useState } from "react";
import "./CarForm.css";

function CarForm(props) {
  const [carName, setCarName] = useState("");
  const [carImageUrl, setCarImageUrl] = useState("");
  const [carDescription, setCarDescription] = useState("");

  const changeCarNameHandler = (event) => {
    setCarName(event.target.value);
  };
  const changeCarImageUrlHandler = (event) => {
    setCarImageUrl(event.target.value);
  };
  const changeCarDescriptionHandler = (event) => {
    setCarDescription(event.target.value);
  };

  const onSubmitCarsHandler = (event) => {
    event.preventDefault();
    const enteredCars = {
      carName: carName,
      carImageUrl: carImageUrl,
      carDescription: carDescription,
    };

    clearFormInputs();
    props.onAddCars(enteredCars);
  };

  const clearFormInputs = () => {
    setCarName("");
    setCarImageUrl("");
    setCarDescription("");
  };

  return (
    <form onSubmit={onSubmitCarsHandler}>
      <div className="car-form">
        <h1>Add car</h1>
        <div className="car-inputs">
          <div>
            <label>Enter Car Name</label>
            <input
              value={carName}
              onChange={changeCarNameHandler}
              type="text"
              name="car name"
            />
          </div>
          <div>
            <label>Enter Car Image Url</label>
            <input
              value={carImageUrl}
              onChange={changeCarImageUrlHandler}
              type="text"
              name="car name"
            />
          </div>
          <div>
            <label>Enter Car Description</label>
            <textarea
              value={carDescription}
              onChange={changeCarDescriptionHandler}
            ></textarea>
          </div>
          <button>Add car</button>
        </div>
      </div>
    </form>
  );
}

export default CarForm;
