import React from "react";
import "./CarForm.css";

function CarForm() {
  return (
    <div className="car-form">
      <h1>Add car</h1>
      <div className="car-inputs">
        <div>
          <label>Enter Car Name</label>
          <input type="text" name="car name" />
        </div>
        <div>
          <label>Enter Car Image Url</label>
          <input type="text" name="car name" />
        </div>
        <div>
          <label>Enter Car Description</label>
          <textarea></textarea>
        </div>
        <button>Add car</button>
      </div>
    </div>
  );
}

export default CarForm;
