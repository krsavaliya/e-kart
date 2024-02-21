import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

export const ProductDisplay = (props) => {
  const { product } = props;

  const { addToCart } = useContext(ShopContext);

  return (
    <div className="ProductDisplay">
      <div className="ProductDisplay-left">
        <div className="ProductDisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="ProductDisplay-img">
          <img className="ProductDisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="ProductDisplay-right">
        <h1>{product.name}</h1>
        <div className="ProductDisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="ProductDisplay-right-prices">
          <div className="ProductDisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="ProductDisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="ProductDisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsa
          harum quia ea similique et sapiente natus officia in ullam.
          Perferendis praesentium, minus ipsum fuga neque soluta omnis a ut
          exercitationem veniam laboriosam eius autem deserunt. Accusantium
          natus corrupti deserunt assumenda commodi atque id, dolor velit harum
          ratione numquam dolorum.
        </div>
        <div className="ProductDisplay-right-storage">
          <h1>Select Storage</h1>
          <div className="ProductDisplay-right-storages">
            <div>256GB</div>
            <div>512Gb</div>
            <div>1TB</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          Add To Cart
        </button>
        <p className="ProductDisplay-right-category">
          <span>Category: &nbsp; </span>Mobile, Laptop, Accessories
        </p>
      </div>
    </div>
  );
};
