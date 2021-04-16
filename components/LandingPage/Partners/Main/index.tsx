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
import { PartnerType } from "../../../../@types";
import { Tooltip } from "@material-ui/core";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

interface Props {
  partners: PartnerType[];
}
const Partners = ({ partners }: Props) => {
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
            slidesPerView: partners.length >= 4 ? 4 : partners.length,
            speed: 3000,
          },
        }}
      >
        {partners.map((value, index) => {
          return (
            <SwiperSlide key={index}>
              <Tooltip title={value.partnerName}>
                <div>
                  <PartnersCard
                    aria-label={value.partnerLogo.imageDescription}
                    imageURL={value.partnerLogo.imageURL}
                  />
                </div>
              </Tooltip>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </PartnersLayoutContainer>
  );
};

export default Partners;
