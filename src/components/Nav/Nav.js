import React from "react";
import "./Nav.css";
function Nav() {
  const addCarHanlder = () => {
    console.log("add car");
  };
  return (
    <div className="nav-bar">
      <div className="nav-title">Cars-Rent</div>
      <div className="add-car">
        <button onClick={addCarHanlder}>+ add Car</button>
      </div>
    </div>
  );
}

export default Nav;
