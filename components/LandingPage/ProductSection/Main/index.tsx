import React from "react";
import ProductCard from "../ProductCard";

interface Props {}

const ProductSection = (props: Props) => {
  return (
    <div style={{ padding: "10%" }}>
      <ProductCard />
    </div>
  );
};

export default ProductSection;
