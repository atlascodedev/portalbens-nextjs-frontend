import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
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
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <AboutUsRoot ref={ref}>
      <AboutUsInnerContainer>
        <AboutUsPictureContainer>
          <AboutUsPicture src={imgURL} />
          <AboutUsPictureText>A oportunidade ao seu alcance</AboutUsPictureText>
          <AboutUsDetailTwo src={"/images/detail-1.svg"} />
        </AboutUsPictureContainer>
        <AboutUsTextContainer>
          <AboutUsTextTitleContainer>
            <AboutUsDetailOne src={"/images/detail-2.svg"} />
            <motion.div
              animate={inView ? "visible" : "hidden"}
              initial="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <div>Sobre nós</div>
            </motion.div>
            <EtusBar />
          </AboutUsTextTitleContainer>
          <AboutUsAuxText>
            Fundada no ano de 2005 e com sede na cidade de Passo Fundo no estado
            do Rio Grande do Sul, a Portal Bens constrói a todo o momento uma
            relação de segurança, respeito, confiança e gratidão com seus
            clientes. Fortalecemos nossos valores com a experiência de nosso
            fundador Moisés de Oliveira que atua nesse ramo desde 1997.
            Trabalhamos forte junto de nossa equipe, sempre em busca de
            consolidar nossa marca como referência no mercado financeiro.
          </AboutUsAuxText>
        </AboutUsTextContainer>
      </AboutUsInnerContainer>
    </AboutUsRoot>
  );
};

export default AboutUsLayoutContainer;
