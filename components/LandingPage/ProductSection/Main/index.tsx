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

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

interface Props {}

const ProductSection = (props: Props) => {
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
          {mockList.map((value, index) => {
            return (
              <SwiperSlide key={index}>
                <ProductCard />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </ProductSectionLayout>
  );
};

export default ProductSection;
