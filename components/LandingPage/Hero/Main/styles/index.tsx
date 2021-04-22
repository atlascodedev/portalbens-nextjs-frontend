import { makeStyles } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import AdonisImage from "../../../../Util/AdonisImage";

const HeroRoot = styled.div`
  position: relative;
  background-color: #324e3e;
  width: 100%;
  height: 100vh;
`;

const HeroImageMobile = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  max-height: 450px;
  max-width: 330px;

  @media (min-width: 405px) {
    max-height: 500px;
    max-width: 380px;
  }
`;

const HeroInnerContainerMobile = styled.div`
  position: relative;
  height: 100%;
  display: block;

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

const HeroInnerMobileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 15%;
  padding-left: 4%;
  padding-right: 4%;
  height: 100%;
`;

const HeroInnerMobileTextMain = styled.div`
  font-size: 35px;
  color: #9eeac0;
  z-index: 50;
`;

const HeroInnerMobileTextAux = styled.div`
  font-size: 18px;
  color: #fff;
  z-index: 50;
`;

const HeroInnerContainerLargeDevices = styled.div`
  position: relative;
  grid-template-columns: 50% 50%;
  height: 100%;
  display: none;
  overflow: hidden;

  @media (min-width: 768px) {
    display: grid;
  }
`;

const HeroLargeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 7%;
`;

const HeroLargeTextMain = styled.div`
  font-size: 60px;
  color: #9eeac0;
  z-index: 50;
`;

const HeroLargeTextAux = styled.div`
  font-size: 24px;
  color: #fff;
  z-index: 50;
  width: 75%;
`;

const HeroLargeImage = styled.img`
  height: auto;
  width: 100%;

  @media (min-width: 1600px) {
    width: 100%;
    height: 100%;
  }
`;

interface HeroLayoutProps {
  thumbnail: string;
  image: string;
  placeholder: string;
}

const HeroContainer = ({ image, placeholder, thumbnail }: HeroLayoutProps) => {
  return (
    <HeroRoot>
      <HeroInnerContainerMobile>
        {/* <HeroImageMobile src={thumbnail} /> */}

        <div style={{ position: "absolute", top: "7%", right: "0" }}>
          <AdonisImage
            imageURL={image}
            small
            mobileHeight={125}
            objectFit="cover"
            alt="Casal abraçando-se após adquirir apartamento"
            objectPosition="left"
          />
        </div>

        <HeroInnerMobileTextContainer>
          <HeroInnerMobileTextMain>
            Oferecemos consórcios e cartas contempladas.
          </HeroInnerMobileTextMain>
          <HeroInnerMobileTextAux>
            Invista nos seus sonhos e conquiste seus objetivos. Oferecemos
            consórcios e cartas contempladas de automóveis e imóveis com
            parcelas que cabem no seu bolso.
          </HeroInnerMobileTextAux>
        </HeroInnerMobileTextContainer>
      </HeroInnerContainerMobile>

      <HeroInnerContainerLargeDevices>
        <HeroLargeTextContainer>
          <HeroLargeTextMain>
            Oferecemos consórcios e cartas contempladas.
          </HeroLargeTextMain>
          <HeroLargeTextAux>
            Invista nos seus sonhos e conquiste seus objetivos. Oferecemos
            consórcios e cartas contempladas de veículos, imóveis e serviços com
            parcelas que cabem no seu bolso.
          </HeroLargeTextAux>
        </HeroLargeTextContainer>

        <div style={{ transform: "translateX(20px)" }}>
          <AdonisImage
            alt="Casal abraçando-se após adquirir apartamento"
            imageURL={image}
          />
        </div>
      </HeroInnerContainerLargeDevices>
    </HeroRoot>
  );
};

export default HeroContainer;
