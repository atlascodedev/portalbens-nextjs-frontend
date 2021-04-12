import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "../TestimonialCard";
import TestimonialCardLayoutContainer from "../TestimonialCard/styles";
import TestimonialsLayoutContainer from "./styles";

interface Props {}

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

const Testimonials = (props: Props) => {
  return (
    <TestimonialsLayoutContainer>
      <Swiper
        id="swiper-testimonials"
        slideToClickedSlide={true}
        slidesPerView={"auto"}
        pagination={{ clickable: true }}
        draggable
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <TestimonialCard
            imageURL={
              "https://firebasestorage.googleapis.com/v0/b/portalbens-nextjs-hefesto.appspot.com/o/adonis%2Fgallery%2Fgigachad.webp?alt=media"
            }
            title={"João Fernandez Alves"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non."
            }
            location={"Passo Fundo/RS"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            imageURL={
              "https://firebasestorage.googleapis.com/v0/b/portalbens-nextjs-hefesto.appspot.com/o/adonis%2Fgallery%2Fgigachad.webp?alt=media"
            }
            title={"João Fernandez Alves"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non."
            }
            location={"Passo Fundo/RS"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            imageURL={
              "https://firebasestorage.googleapis.com/v0/b/portalbens-nextjs-hefesto.appspot.com/o/adonis%2Fgallery%2Fgigachad.webp?alt=media"
            }
            title={"João Fernandez Alves"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non."
            }
            location={"Passo Fundo/RS"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            imageURL={
              "https://firebasestorage.googleapis.com/v0/b/portalbens-nextjs-hefesto.appspot.com/o/adonis%2Fgallery%2Fgigachad.webp?alt=media"
            }
            title={"João Fernandez Alves"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non."
            }
            location={"Passo Fundo/RS"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            imageURL={
              "https://firebasestorage.googleapis.com/v0/b/portalbens-nextjs-hefesto.appspot.com/o/adonis%2Fgallery%2Fgigachad.webp?alt=media"
            }
            title={"João Fernandez Alves"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non."
            }
            location={"Passo Fundo/RS"}
          />
        </SwiperSlide>
      </Swiper>
    </TestimonialsLayoutContainer>
  );
};

export default Testimonials;
