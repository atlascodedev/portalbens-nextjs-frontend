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
import ProductContactForm from "../ProductContactForm/Main";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

interface Props {
  products: CardProduct[];
}

const ProductSection = ({ products = [] }: Props) => {
  const ProductFormFeedbackDialog = useEnhancedDialog(
    "Seu formulário foi enviado com sucesso, em breve um membro de nossa equipe entrará em contato para atendé-lo",
    "Formulário enviado com sucesso",
    "success"
  );

  const [backdropVisibility, setBackdropVisibility] = React.useState<boolean>(
    false
  );

  const [formCardDetails, setFormCardDetails] = React.useState<string>("");

  const handleFormContactCallback = (cardInfo: string) => {
    setBackdropVisibility(true);
    setFormCardDetails(cardInfo);
  };

  const toggleBackdropVisibility = (open: boolean) => {
    setBackdropVisibility(open);
  };

  const [maxValue, setMaxValue] = React.useState<string | number | null>("");
  const [productType, setProductType] = React.useState<ProductType>(
    "Automóvel"
  );
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
      let productVisibleLocalDefault: CardProduct[] = products;

      let filteredProducts = productVisibleLocalDefault.filter(
        (product, index) => {
          return product.cardType == productTypeArg;
        }
      );

      setVisibleProducts([...filteredProducts]);
    } else {
      let productVisibleLocal: CardProduct[] = products;

      let filteredProducts = productVisibleLocal.filter(
        (product: CardProduct, index: number) => {
          return (
            product.cardEntrada <= parseInt(maxValueArg as string) &&
            product.cardType == productTypeArg
          );
        }
      );

      setVisibleProducts([...filteredProducts]);
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
      <ProductFormFeedbackDialog.EnhancedDialog />
      <WhatsAppDialog />
      <ProductContactForm
        toggleFeedback={ProductFormFeedbackDialog.setVisibility}
        cardDetails={formCardDetails}
        open={backdropVisibility}
        toggleVisibility={toggleBackdropVisibility}
      />

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
                  textAlign: "center",
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
                  >
                    <div>
                      <ProductCard
                        formCallback={() =>
                          handleFormContactCallback(`\n\n ID: ${
                            value.uuid
                          } \n\n <br> <br> Administradora: ${
                            value.administradora
                          } \n\n <br> <br> Entrada: ${
                            value.cardEntrada
                          } \n\n <br> <br> Tipo de carta: ${
                            value.cardType
                          } \n\n <br> <br> Valor da carta: ${
                            value.cardValor
                          } \n\n <br> <br> Parcelas: ${value.cardInstallment
                            .map((value, index) => {
                              return `<br>\n\n ${
                                value.installmentMonths
                              } de ${formatToCurrency(
                                "pt-BR",
                                "BRL",
                                parseInt(value.installmentValue.toString())
                              )} \n`;
                            })
                            .join(" <br>\n\n")}
                        `)
                        }
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
