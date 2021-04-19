import { motion, Variants } from "framer-motion";
import InView, { useInView } from "react-intersection-observer";
import styled from "styled-components";
import useObserverControlledAnimation from "../../../../../hooks/useObserverControlledAnimation";
import EtusBar from "../../../../Util/EtusBar";

const AboutUsRoot = styled.div`
  width: 100%;
  background-color: #fff;
  padding-bottom: 7%;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.25);

  @media (min-width: 1024px) {
  }
`;

const AboutUsInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const AboutUsPictureContainer = styled.div`
  width: 100%;
  position: relative;

  @media (min-width: 1024px) {
    max-width: 58%;
  }
`;

const AboutUsPicture = styled.img`
  width: 100%;
  padding-top: 5%;
  transform: translateX(-20px);

  @media (min-width: 1024px) {
    padding-top: 0px;
    width: 100%;
  }
`;

const AboutUsPictureText = styled.div`
  color: #da4e49;
  margin-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: left;
  font-size: 22px;
  padding-left: 5%;

  @media (min-width: 1024px) {
    font-size: 45px;
    text-align: right;
  }
`;

const AboutUsTextContainer = styled.div`
  padding-left: 5%;
  padding-right: 5%;

  @media (min-width: 1024px) {
    max-width: 42%;
  }
`;

const AboutUsTextTitleContainer = styled.div`
  color: #333;
  font-size: 30px;
  position: relative;

  @media (min-width: 1024px) {
    font-size: 30px;
  }
`;

const AboutUsAuxText = styled.div`
  color: #333;
  font-family: "Roboto";

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

const AboutUsDetailOne = styled.img`
  width: 150px;
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-165px);
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const AboutUsDetailTwo = styled.img`
  width: 166px;
  height: 330px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  transform: translateY(200px);
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

interface AboutUsLayoutContainerProps {
  imgURL: string;
}

const AboutUsLayoutContainer = ({ imgURL }: AboutUsLayoutContainerProps) => {
  // const { animationControls, ref: refus } = useObserverControlledAnimation({
  //   opacity: [0, 1],
  //   x: [-250, 0],
  //   transition: { delay: 1, repeat: Infinity, repeatDelay: 1 },
  // });

  return (
    <InView triggerOnce={false}>
      {({ entry, inView, ref }) => {
        return (
          <AboutUsRoot ref={ref}>
            <AboutUsInnerContainer>
              <AboutUsPictureContainer style={{ position: "relative" }}>
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
                      x: "-200%",
                    },
                  }}
                >
                  <AboutUsPicture src={imgURL} />
                </motion.div>
                <motion.div
                  initial={"hidden"}
                  transition={{ duration: 1.15 }}
                  animate={inView ? "visible" : "hidden"}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: {
                      opacity: 0,
                      x: "-200%",
                    },
                  }}
                >
                  <AboutUsPictureText>
                    A oportunidade ao seu alcance
                  </AboutUsPictureText>
                </motion.div>

                <motion.img
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    display: global.window.innerWidth > 1024 ? "block" : "none",
                  }}
                  src="images/detail-1.svg"
                  initial={"hidden"}
                  onAnimationEnd={() => console.log("end")}
                  animate={inView ? "visible" : "hidden"}
                  transition={{ duration: 1.25, delay: 0.75 }}
                  variants={{
                    visible: { opacity: 1 },
                    hidden: {
                      opacity: 0,
                    },
                  }}
                >
                  {/* <AboutUsDetailTwo src={"/images/detail-1.svg"} /> */}
                </motion.img>
              </AboutUsPictureContainer>
              <AboutUsTextContainer>
                <AboutUsTextTitleContainer>
                  <motion.div
                    style={{ position: "relative" }}
                    initial={"hidden"}
                    animate={inView ? "visible" : "hidden"}
                    transition={{ duration: 1.25, delay: 0.75 }}
                    variants={{
                      visible: { opacity: 1 },
                      hidden: {
                        opacity: 0,
                      },
                    }}
                  >
                    <AboutUsDetailOne src={"/images/detail-2.svg"} />
                  </motion.div>

                  <motion.div
                    initial={"hidden"}
                    transition={{ duration: 1.15 }}
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: {
                        opacity: 0,
                        x: "-100%",
                      },
                    }}
                  >
                    <div>Sobre nós</div>
                  </motion.div>

                  <motion.div
                    style={{ position: "relative" }}
                    initial={"hidden"}
                    onAnimationEnd={() => console.log("end")}
                    animate={inView ? "visible" : "hidden"}
                    transition={{
                      type: "spring",
                      damping: 10,
                      stiffness: 100,
                    }}
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: {
                        opacity: 0,
                        y: 100,
                      },
                    }}
                  >
                    <EtusBar />
                  </motion.div>
                </AboutUsTextTitleContainer>
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
                  <AboutUsAuxText>
                    Fundada no ano de 2005 e com sede na cidade de Passo Fundo
                    no estado do Rio Grande do Sul, a Portal Bens constrói a
                    todo o momento uma relação de segurança, respeito, confiança
                    e gratidão com seus clientes. Fortalecemos nossos valores
                    com a experiência de nosso fundador Moisés de Oliveira que
                    atua nesse ramo desde 1997. Trabalhamos forte junto de nossa
                    equipe, sempre em busca de consolidar nossa marca como
                    referência no mercado financeiro.
                  </AboutUsAuxText>
                </motion.div>
              </AboutUsTextContainer>
            </AboutUsInnerContainer>
          </AboutUsRoot>
        );
      }}
    </InView>
  );
};

export default AboutUsLayoutContainer;
