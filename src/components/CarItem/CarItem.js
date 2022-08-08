import React from "react";
import "./CarItem.css";

function CarItem() {
  return (
    <div className="car-item">
      <div className="car-image">
        <img
          alt="tesla"
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/195458a0-ff67-488c-b972-14d23d2c42fb/bvlatuR/std/1200x630/ms-homepage-social"
        />
      </div>
      <div className="car-description">description</div>
      <div className="car-button">Button</div>
    </div>
  );
}

export default CarItem;
