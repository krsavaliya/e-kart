import React from "react";
import "./addproduct.css";
export const AddProduct = () => {
  return (
    <>
      <div className="addproduct">
        <div className="addproduct-itemfield">
          <p>Product Title</p>
          <input type="text" name="name" placeholder="" />
        </div>
        <div className="addprodict-price">
          <div className="addproduct-itemfield">
            <p>Price</p>
            <input type="text" name="old_price" placeholder="" />
          </div>
          <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input type="text" name="new_price" placeholder="" />
          </div>
        </div>
        <div className="addproduct-itemfield">
          <p>Product Description</p>
          <select name="category" className="add-product-selector">
            <option value="laptop">Laptop</option>
            <option value="mobile">Mobile</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>
        <div className="addproduct-itemfield">
          <label htmlFor="file-input">
            <img src="" alt="upload_area" />
          </label>
          <input type="file" name="image" id="file-input" hidden />
        </div>
        <button className="addproduct-btn">Add</button>
      </div>
    </>
  );
};
