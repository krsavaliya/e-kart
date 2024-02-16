import React, { useContext } from "react";
import "./breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
import { ShopContext } from "../../Context/ShopContext";

export const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};
