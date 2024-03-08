import React, { useState } from "react";
import "./addproduct.css";
import upload_area from "../../assets/upload_area.png";

export const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "laptop",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const AddProduct = async () => {
    console.log(productDetails);
  };

  return (
    <>
      <div className="addproduct">
        <div className="addproduct-itemfield">
          <p>Product Title</p>
          <input
            value={productDetails.name}
            onChange={changeHandler}
            type="text"
            name="name"
            placeholder=""
          />
        </div>
        <div className="addproduct-price">
          <div className="addproduct-itemfield">
            <p>Price</p>
            <input
              value={productDetails.old_price}
              onChange={changeHandler}
              type="text"
              name="old_price"
              placeholder=""
            />
          </div>
          <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input
              value={productDetails.new_price}
              onChange={changeHandler}
              type="text"
              name="new_price"
              placeholder=""
            />
          </div>
        </div>
        <div className="addproduct-itemfield">
          <p>Product Description</p>
          <select
            value={productDetails.category}
            onChange={changeHandler}
            name="category"
            className="add-product-selector"
          >
            <option value="laptop">Laptop</option>
            <option value="mobile">Mobile</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>
        <div className="addproduct-itemfield">
          <label htmlFor="file-input">
            <img
              src={image ? URL.createObjectURL(image) : upload_area}
              alt="upload_area"
              style={{
                padding: "5px",
                height: "150px",
                width: "150px",
                objectFit: "contain",
              }}
            />
          </label>
          <input
            onChange={imageHandler}
            type="file"
            name="image"
            id="file-input"
            hidden
          />
        </div>
        <button
          onClick={() => {
            AddProduct();
          }}
          className="addproduct-btn"
        >
          Add
        </button>
      </div>
    </>
  );
};
