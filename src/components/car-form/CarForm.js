import React from "react";
import "./CarForm.css";

function CarForm() {
  return (
    <div className="car-form">
      <h1>Add car</h1>
      <div className="car-inputs">
        <input type="text" name="car name" placeholder="enter car name" />
        <input type="text" name="car name" placeholder="enter car image url" />
        <textarea placeholder="enter car description"></textarea>

        <button>Add car</button>
      </div>
    </div>
  );
}

export default CarForm;
