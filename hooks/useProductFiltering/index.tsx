import React from "react";
import { Product, ProductType } from "../../@types";

const useProductFiltering = (
  products: Product[],
  maxValue: number | string | null,
  productType: ProductType | null
) => {
  const [visibleProducts, setVisibleProducts] = React.useState<Product[]>([]);

  if (productType !== null || maxValue !== null) {
    products.filter((product, index) => {
      return product.entradaCredito <= maxValue && product.type == productType;
    });
  }
};
