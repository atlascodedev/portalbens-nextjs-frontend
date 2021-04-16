import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsType } from "../../../../@types";
import TestimonialCard from "../TestimonialCard";
import TestimonialCardLayoutContainer from "../TestimonialCard/styles";
import TestimonialsLayoutContainer from "./styles";

interface Props {
  testimonials: TestimonialsType[];
}

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

const Testimonials = ({ testimonials = [] }: Props) => {
  const numArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 1, 1, 1, 1, 1];

  return (
    <TestimonialsLayoutContainer>
      <Swiper
        id="swiper-testimonials"
        slideToClickedSlide={true}
        slidesPerView={"auto"}
        centeredSlides={testimonials.length <= 3 ? true : false}
        pagination={{ clickable: true, dynamicBullets: true }}
        draggable
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((value: TestimonialsType, index: number) => {
          return (
            <SwiperSlide key={index}>
              <TestimonialCard
                imageURL={value.testimonialPicture.imageURL}
                title={value.testimonialName}
                text={value.testimonialText}
                location={value.testimonialLocation}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </TestimonialsLayoutContainer>
  );
};

export default Testimonials;
