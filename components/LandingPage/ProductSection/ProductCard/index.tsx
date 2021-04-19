import React from "react";
import { CardProduct, Product } from "../../../../@types";
import ProductCardLayout from "./styles";

export interface ProductCardProps extends CardProduct {
  whatsAppCallback?: (...args: any[]) => void;
  formCallback?: (...args: any[]) => void;
}

const ProductCard = ({
  administradora,
  cardDestaque,
  cardEntrada,
  cardExpire,
  cardInstallment,
  cardSituation,
  cardType,
  cardValor,
  uuid,
  formCallback,
  whatsAppCallback,
}: ProductCardProps) => {
  return (
    <ProductCardLayout
      formCallback={formCallback}
      whatsAppCallback={whatsAppCallback}
      administradora={administradora}
      cardDestaque={cardDestaque}
      cardEntrada={cardEntrada}
      cardExpire={cardExpire}
      cardInstallment={cardInstallment}
      cardSituation={cardSituation}
      cardType={cardType}
      cardValor={cardValor}
      uuid={uuid}
    />
  );
};

export default ProductCard;
