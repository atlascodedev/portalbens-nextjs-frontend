import styled from "styled-components";
import EtusBar from "../../../../Util/EtusBar";

const ProductIntroRoot = styled.div`
  background-color: #f5f5f5;
  width: 100%;
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

  @media (min-width: 1024px) {
    font-size: 35px;
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

interface ProductIntroLayoutContainerProps {
  imageURL: string;
}

const ProuductIntroLayoutContainer = ({
  imageURL,
}: ProductIntroLayoutContainerProps) => {
  return (
    <ProductIntroRoot>
      <ProductIntroInnerContainer>
        <ProductIntroPictureContainer>
          <ProductIntroPicture src={imageURL} />
        </ProductIntroPictureContainer>
        <ProductIntroTextContainer>
          <ProductIntroTextTitle>
            <div>O que são cartas contempladas?</div>
            <EtusBar width={"200px"} />
          </ProductIntroTextTitle>
          <ProductIntroTextAux>
            É uma das opções de investimento mais procuradas no Brasil. Sob
            posse dessas cartas contempladas o cliente dispõe do valor integral
            do crédito para a compra do seu bem, sem precisar passar por sorteio
            ou lance, tendo em seu favor o poder de negociar melhores condições
            na hora de comprar o seu bem à vista.
          </ProductIntroTextAux>
        </ProductIntroTextContainer>
      </ProductIntroInnerContainer>
    </ProductIntroRoot>
  );
};

export default ProuductIntroLayoutContainer;
