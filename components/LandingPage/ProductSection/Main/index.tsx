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
  return (
    <ProductSectionLayout>
      <div style={{ paddingBottom: "5%" }}>
        <ProductSearch />
      </div>

      <ProductCard />
    </ProductSectionLayout>
  );
};

export default ProductSection;
