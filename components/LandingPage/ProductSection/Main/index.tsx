import React from "react";
import ProductCard from "../ProductCard";
import ProductSectionLayout from "./styles";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductSearch, { ProductSearchProps } from "../ProductSearch";
import { CardProduct, ProductType } from "../../../../@types";
import { Fade } from "@material-ui/core";
import useEnhancedDialog from "../../../../hooks/useEnhancedDialog";
import formatToCurrency from "../../../../helper/formatToCurrency";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

interface Props {
  products: CardProduct[];
}

const ProductSection = ({ products = [] }: Props) => {
  const [maxValue, setMaxValue] = React.useState<string | number | null>("");
  const [productType, setProductType] = React.useState<ProductType>("vehicle");
  const [visibleProducts, setVisibleProducts] = React.useState<CardProduct[]>(
    []
  );

  React.useEffect(() => {
    setVisibleProducts(products);
  }, []);

  const handleProductFiltering = (
    maxValueArg: string | number,
    productTypeArg: ProductType
  ): void => {
    if (maxValueArg == "") {
      setVisibleProducts(products);
    } else {
      let productVisibleLocal: CardProduct[] = products.filter(
        (product: CardProduct, index: number) => {
          return (
            product.cardEntrada <= parseInt(maxValueArg as string) &&
            product.cardType == productTypeArg
          );
        }
      );

      setVisibleProducts(productVisibleLocal);
    }
  };

  const handleSetProductType = (newProductType: ProductType) => {
    setProductType(newProductType);
  };

  const handleSetMaxValue = (newMaxValue: string | number) => {
    setMaxValue(newMaxValue);
  };

  const {
    EnhancedDialog: WhatsAppDialog,
    setCallback: setCallbackWhatsApp,
    setVisibility: setVisibilityWhatsApp,
  } = useEnhancedDialog(
    `Você será direcionado ao WhatspApp para falar com um de nossos representantes sobre esta carta`,
    "Informação",
    "info"
  );

  const whatsAppCallback = (cardInfo: CardProduct) => {
    setCallbackWhatsApp(() => {
      let message: string = `Olá, gostaria de falar sobre a seguinte carta: \n\n\ *ID*: ${
        cardInfo.uuid
      } \n\n *Valor do crédito*: ${formatToCurrency(
        "pt-BR",
        "BRL",
        parseInt(cardInfo.cardValor as string)
      )} \n\n *Parcelas*: \n\ ${cardInfo.cardInstallment.map((value, index) => {
        return `*${value.installmentMonths}* vezes de ${formatToCurrency(
          "pt-BR",
          "BRL",
          parseInt(value.installmentValue as string)
        )} \n `;
      })}
      \n *Administradora*: ${
        cardInfo.administradora
      } \n\n *Entrada*: ${formatToCurrency(
        "pt-BR",
        "BRL",
        parseInt(cardInfo.cardEntrada as string)
      )} 
      `;

      window.open(
        `https://web.whatsapp.com/send?phone=555499848770&text=${encodeURIComponent(
          message
        )}&lang=pt_br`,
        "_blank"
      );
    });
  };

  return (
    <ProductSectionLayout>
      <WhatsAppDialog />

      <div style={{ paddingBottom: "5%" }}>
        <ProductSearch
          filterProduct={handleProductFiltering}
          maxValue={maxValue}
          productType={productType}
          setMaxValue={handleSetMaxValue}
          setProduct={handleSetProductType}
        />
      </div>

      <div style={{ width: "100%" }}>
        <Swiper
          id="swiper-products"
          slidesPerView={"auto"}
          centeredSlides={visibleProducts.length <= 3 ? true : false}
          pagination={{ clickable: true, dynamicBullets: true }}
          draggable
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {visibleProducts.length <= 0 ? (
            <Fade in={true} timeout={{ enter: 750, exit: 750 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "22px",
                }}
              >
                Nenhuma carta com estes critérios foi encontrada.
              </div>
            </Fade>
          ) : (
            visibleProducts.map((value: CardProduct, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <Fade
                    in={true}
                    timeout={{ enter: 500, exit: 750 }}
                    unmountOnExit
                    exit={true}
                  >
                    <div>
                      <ProductCard
                        whatsAppCallback={() => whatsAppCallback(value)}
                        cardExpire={value.cardExpire}
                        cardSituation={value.cardSituation}
                        uuid={value.uuid}
                        administradora={value.administradora}
                        cardEntrada={value.cardEntrada}
                        cardDestaque={value.cardDestaque}
                        cardInstallment={value.cardInstallment}
                        cardType={value.cardType}
                        cardValor={value.cardValor}
                      />
                    </div>
                  </Fade>
                </SwiperSlide>
              );
            })
          )}
        </Swiper>
      </div>
    </ProductSectionLayout>
  );
};

export default ProductSection;
