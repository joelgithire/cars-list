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
      <div className="car-description">
        The Tesla Model 3 is a compact executive sedan that is battery powered
        and produced by Tesla.[7] Limited production of the Model 3 began in
        mid-2017, with the first production vehicle rolling off the assembly
        line on July 7, 2017.[8][9][10] The official launch and delivery of the
        first 30 cars took place on July 28.
      </div>
      <div className="car-button">Button</div>
    </div>
  );
}

export default CarItem;
