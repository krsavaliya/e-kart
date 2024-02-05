import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/elogo.png";
import carticon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" width="65" height="65" />
        <p>E-KART</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop{" "}
          </Link>{" "}
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mobile");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mobile">
            Mobile{" "}
          </Link>
          {menu === "mobile" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("laptop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/laptop">
            Laptop{" "}
          </Link>
          {menu === "laptop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("accessories");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/accessories">
            Accessories{" "}
          </Link>{" "}
          {menu === "accessories" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={carticon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
