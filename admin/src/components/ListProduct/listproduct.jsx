import React, { useEffect, useState } from "react";
import "./listproduct.css";
import cross_icon from "../../assets/cross_icon.png";

export const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchAllProducts = async () => {
    await fetch("http://localhost:4000/get-products")
      .then((resp) => resp.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const removeProduct = async (id) => {
    await fetch("http://localhost:4000/remove-product", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchAllProducts();
  };

  return (
    <div className="list-product">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allProducts.map((product, index) => {
          return (
            <>
              <div key={index} className="listproduct-format-main">
                <img
                  src={product.image}
                  alt="product_image"
                  className="listproduct-product-icon"
                />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img
                  onClick={() => {
                    removeProduct(product.id);
                  }}
                  src={cross_icon}
                  alt="cross_icon"
                  className="listproduct-remove-icon"
                />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};
