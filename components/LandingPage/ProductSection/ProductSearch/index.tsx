import React from "react";
import { ProductType } from "../../../../@types";
import ProductSearchLayout from "./styles";

export interface ProductSearchProps {
  setProduct: (newProductType: ProductType) => void;
  setMaxValue: (newMaxValue: string | number) => void;
  filterProduct: (
    maxValueArg: string | number,
    productTypeArg: ProductType
  ) => void;
  productType: ProductType;
  maxValue: string | number;
}

const ProductSearch = ({
  setMaxValue,
  setProduct,
  maxValue,
  productType,
  filterProduct,
}: ProductSearchProps) => {
  return (
    <ProductSearchLayout
      filterProduct={filterProduct}
      maxValue={maxValue}
      productType={productType}
      setMaxValue={setMaxValue}
      setProduct={setProduct}
    />
  );
};

export default ProductSearch;
