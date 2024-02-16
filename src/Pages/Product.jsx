import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Breadcrum } from "../Components/BreadCrums/BreadCrum";
import ShopContext from "../Context/ShopContext";
import all_product from "../Components/Assets/all_product";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import { DescriptionBox } from "../Components/DescriptionBox/DescriptionBox";
import { RelatedProduct } from "../Components/RelatedProduct/RelatedProduct";

export const Product = () => {
  // const { all_product } = useContext(ShopContext);

  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
};
