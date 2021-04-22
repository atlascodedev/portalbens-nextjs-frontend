import React from "react";
import HeroContainer from "./styles";

interface Props {}

const Hero = (props: Props) => {
  const heroFullImage: string =
    "https://firebasestorage.googleapis.com/v0/b/portalbens-nextjs-hefesto.appspot.com/o/adonis%2Fgallery%2Ffoto-principal.webp?alt=media";
  const heroMobileImage: string = `https://firebasestorage.googleapis.com/v0/b/portalbens-nextjs-hefesto.appspot.com/o/adonis%2Fgallery%2Fportalbens-hero-mobile-version.webp?alt=media`;
  const heroBlurImage: string =
    "https://firebasestorage.googleapis.com/v0/b/portalbens-nextjs-hefesto.appspot.com/o/adonis%2Fgallery_thumbnail%2Fportalbens-hero-img.webp?alt=media";

  return (
    <HeroContainer
      image={heroFullImage}
      placeholder={heroBlurImage}
      thumbnail={heroMobileImage}
    ></HeroContainer>
  );
};

export default Hero;
