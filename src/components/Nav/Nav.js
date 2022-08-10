import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <div className="nav-bar">
      <div className="nav-title">Cars-Rent</div>
      <div className="add-car">
        <button>+ add Car</button>
      </div>
    </div>
  );
}

export default Nav;
