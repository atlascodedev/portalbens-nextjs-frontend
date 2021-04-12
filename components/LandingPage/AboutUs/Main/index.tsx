import React from "react";
import AboutUsLayoutContainer from "./styles";

interface Props {}

const AboutUs = (props: Props) => {
  const aboutUSPicture: string =
    "https://firebasestorage.googleapis.com/v0/b/portalbens-nextjs-hefesto.appspot.com/o/adonis%2Fgallery%2Fportalbens-aboutus.webp?alt=media";

  return <AboutUsLayoutContainer imgURL={aboutUSPicture} />;
};

export default AboutUs;
