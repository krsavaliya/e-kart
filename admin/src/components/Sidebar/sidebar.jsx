import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import add_product_item from "../../assets/add_product_item.png";
import list_product_item from "../../assets/list_product_item.png";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={add_product_item} alt="add_product_item" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={list_product_item} alt="list_product_item" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
