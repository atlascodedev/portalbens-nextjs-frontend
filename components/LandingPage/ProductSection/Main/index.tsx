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
import ProductSearch from "../ProductSearch";
import { Product } from "../../../../@types";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

interface Props {
  products: Product[];
}

const ProductSection = ({ products = [] }: Props) => {
  const mockList: any[] = [1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <ProductSectionLayout>
      <div style={{ paddingBottom: "5%" }}>
        <ProductSearch />
      </div>

      <div style={{ width: "100%" }}>
        <Swiper
          id="swiper-products"
          slideToClickedSlide={true}
          slidesPerView={"auto"}
          centeredSlides={Boolean(mockList.length > 3 ? false : true)}
          pagination={{ clickable: true, dynamicBullets: true }}
          draggable
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {products.map((value: Product, index: number) => {
            return (
              <SwiperSlide key={index}>
                <ProductCard
                  admin={value.admin}
                  entradaCredito={value.entradaCredito}
                  featured={value.featured}
                  saldoCredito={value.saldoCredito}
                  type={value.type}
                  valorCredito={value.valorCredito}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </ProductSectionLayout>
  );
};

export default ProductSection;
