import React from "react";
import { CardProduct, ProductType } from "../../@types";

const useProductFiltering = (
  products: CardProduct[],
  maxValue: number | string | null,
  productType: ProductType | null
) => {
  const [visibleProducts, setVisibleProducts] = React.useState<CardProduct[]>(
    []
  );

  if (productType !== null || maxValue !== null) {
    products.filter((product, index) => {
      return product.cardEntrada <= maxValue && product.cardType == productType;
    });
  }
};
