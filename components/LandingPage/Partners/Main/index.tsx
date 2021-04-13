import React from "react";
import PartnersLayoutContainer, { PartnersCard } from "./styles";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

interface Props {}
const Partners = ({}: Props) => {
  const mockArray: any[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <PartnersLayoutContainer>
      <Swiper
        id="swiper-partners"
        slidesPerView={"auto"}
        loop
        autoplay
        speed={3000}
        breakpoints={{
          1024: {
            slidesPerView: 4,
            speed: 3000,
          },
        }}
      >
        {mockArray.map((value, index) => {
          return (
            <SwiperSlide key={index}>
              <PartnersCard imageURL={"https://via.placeholder.com/150"} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </PartnersLayoutContainer>
  );
};

export default Partners;
