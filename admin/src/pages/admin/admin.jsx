import React from "react";
import "./admin.css";
import { Sidebar } from "../../components/Sidebar/sidebar";
import { Route, Routes } from "react-router-dom";
import { AddProduct } from "../../components/AddProduct/addproduct";
import { ListProduct } from "../../components/ListProduct/listproduct";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
};

export default Admin;
