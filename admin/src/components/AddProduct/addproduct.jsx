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

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application.json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;
      await fetch("http://localhost:4000/add-product", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          {
            data.success
              ? alert("Product Added Successfully")
              : alert("Product Addition Failed");
          }
        });
    }
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
            Add_Product();
          }}
          className="addproduct-btn"
        >
          Add
        </button>
      </div>
    </>
  );
};
