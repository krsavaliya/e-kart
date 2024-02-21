import React from "react";
import "./offers.css";
import exclusiveimg from "../Assets/exclusive_image.jpeg";

export const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>only beat seller</p>
        <button>check nowasdnc</button>
      </div>
      <div className="offers-right">
        <img src={exclusiveimg} alt="" height="375" width="548" />
      </div>
    </div>
  );
};
export default Offers;
