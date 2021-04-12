import React from "react";
import ProuductIntroLayoutContainer from "./styles";

interface Props {}

const ProductIntro = (props: Props) => {
  return (
    <ProuductIntroLayoutContainer
      imageURL={
        "https://firebasestorage.googleapis.com/v0/b/portalbens-nextjs-hefesto.appspot.com/o/adonis%2Fgallery%2Fportalbens-productinfo.webp?alt=media"
      }
    />
  );
};

export default ProductIntro;
