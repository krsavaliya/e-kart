import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

export const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img
          onCanPlay={window.scrollTo(0, 0)}
          src={props.image}
          alt=""
          width="163"
          height="137"
        />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
