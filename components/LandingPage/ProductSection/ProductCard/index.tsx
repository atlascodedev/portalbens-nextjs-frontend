import React from "react";
import { Product } from "../../../../@types";
import ProductCardLayout from "./styles";

interface Props extends Product {}

const ProductCard = ({
  admin,
  entradaCredito,
  featured,
  saldoCredito,
  type,
  valorCredito,
}: Props) => {
  return (
    <ProductCardLayout
      admin={admin}
      entradaCredito={entradaCredito}
      featured={featured}
      saldoCredito={saldoCredito}
      type={type}
      valorCredito={valorCredito}
    />
  );
};

export default ProductCard;
