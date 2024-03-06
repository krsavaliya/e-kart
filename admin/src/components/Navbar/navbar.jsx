import React from "react";
import "./navbar.css";
import navlogo from "../../assets/elogo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} className="nav-logo" alt="" />
      <img src={null} className="nav-profile" alt="navprofile" />
    </div>
  );
};

export default Navbar;
