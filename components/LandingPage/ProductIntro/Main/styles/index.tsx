import { motion } from "framer-motion";
import InView from "react-intersection-observer";
import styled from "styled-components";
import AdonisImage from "../../../../Util/AdonisImage";
import EtusBar from "../../../../Util/EtusBar";

const ProductIntroRoot = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  padding-bottom: 7%;
`;

const ProductIntroInnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const ProductIntroPictureContainer = styled.div`
  position: relative;

  @media (min-width: 1024px) {
    max-width: 55%;
    order: 1;
  }
`;

const ProductIntroPicture = styled.img`
  width: 100%;
  padding-top: 10%;
  padding-left: 5%;

  @media (min-width: 1024px) {
    padding-top: 0px;
  }
`;

const ProductIntroTextContainer = styled.div`
  color: #333;
  padding-left: 6%;
  padding-right: 6%;

  @media (min-width: 1024px) {
    max-width: calc(100% - 55%);
    order: 0;
  }
`;

const ProductIntroTextTitle = styled.div`
  font-size: 30px;
  padding-top: 5%;

  @media (min-width: 1024px) {
    font-size: 35px;
    padding-top: 0px;
  }
`;

const ProductIntroTextAux = styled.div`
  font-family: "Roboto";
  font-size: 15px;
  padding-top: 5%;

  @media (min-width: 1024px) {
    font-size: 20px;
    padding-top: 0px;
  }
`;

const ProductInfoDetailOne = styled.img`
  width: 40px;
  height: 155px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 50;
  transform: translate(-80px, -35px);

  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

interface ProductIntroLayoutContainerProps {
  imageURL: string;
}

const ProuductIntroLayoutContainer = ({
  imageURL,
}: ProductIntroLayoutContainerProps) => {
  return (
    <InView>
      {({ entry, inView, ref }) => {
        return (
          <ProductIntroRoot ref={ref}>
            <ProductIntroInnerContainer>
              <ProductIntroPictureContainer>
                <motion.div
                  style={{ position: "relative" }}
                  initial={"hidden"}
                  onAnimationEnd={() => console.log("end")}
                  animate={inView ? "visible" : "hidden"}
                  transition={{ duration: 1.25 }}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: {
                      opacity: 0,
                      x: "200%",
                    },
                  }}
                >
                  {/* <ProductIntroPicture src={imageURL} /> */}
                  <AdonisImage
                    mobileHeight={63}
                    height={34}
                    imageURL={imageURL}
                  />
                </motion.div>

                <ProductInfoDetailOne src={"/images/detail-3.svg"} />
              </ProductIntroPictureContainer>
              <ProductIntroTextContainer>
                <ProductIntroTextTitle>
                  <motion.div
                    initial={"hidden"}
                    animate={inView ? "visible" : "hidden"}
                    transition={{
                      duration: 1.15,
                    }}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: {
                        opacity: 0,
                        x: "100%",
                      },
                    }}
                  >
                    <div>O que é carta contemplada?</div>
                  </motion.div>
                  <EtusBar width={"200px"} />
                </ProductIntroTextTitle>
                <motion.div
                  initial={"hidden"}
                  animate={inView ? "visible" : "hidden"}
                  transition={{
                    duration: 1.15,
                  }}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: {
                      opacity: 0,
                      x: "-100%",
                    },
                  }}
                >
                  <ProductIntroTextAux>
                    É uma das opções de investimento mais procuradas no Brasil.
                    Sob posse dessas cartas contempladas o cliente dispõe do
                    valor integral do crédito para a compra do seu bem, sem
                    precisar passar por sorteio ou lance, tendo em seu favor o
                    poder de negociar melhores condições na hora de comprar o
                    seu bem à vista.
                  </ProductIntroTextAux>
                </motion.div>
              </ProductIntroTextContainer>
            </ProductIntroInnerContainer>
          </ProductIntroRoot>
        );
      }}
    </InView>
  );
};

export default ProuductIntroLayoutContainer;
