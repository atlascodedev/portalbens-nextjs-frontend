import { Grid, SvgIcon, TextField } from "@material-ui/core";
import { AccountCircle, Mail } from "@material-ui/icons";
import styled from "styled-components";

const ProductContactFormLayoutRoot = styled.div`
  width: 320px;
  height: 600px;
  /* min-height: 416px; */
  font-family: "Roboto";

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  @media (min-width: 1024px) {
    width: 462px;
    height: 626px;
  }
`;

const ProductContactFormLayoutInnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ProductContactFormLayoutHeader = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2196f3;

  .MuiSvgIcon-root {
    height: 75px;
    width: 75px;
    fill: #fff;
  }

  @media (min-width: 1024px) {
    .MuiSvgIcon-root {
      height: 100px;
      width: 100px;
    }
  }
`;

const ProductContactFormLayoutTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

const ProducttContactFormLayoutText = styled.div`
  font-size: 12px;
  color: #7c7c7c;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

const ProductContactFormLayoutContentContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  padding: 20px;
  width: 100%;
  height: calc(100% - 30%);
`;

const ProductContactFormLayoutFieldsContainer = styled.div``;

export interface ProductContactFormLayoutProps {}

const ProductContactFormLayout: React.FC<ProductContactFormLayoutProps> = ({
  children,
}) => {
  return (
    <ProductContactFormLayoutRoot>
      <ProductContactFormLayoutInnerContainer>
        <ProductContactFormLayoutHeader>
          <SvgIcon component={Mail} />
        </ProductContactFormLayoutHeader>
        <ProductContactFormLayoutContentContainer>
          <ProductContactFormLayoutTitle>
            Contato por formulário
          </ProductContactFormLayoutTitle>
          <ProducttContactFormLayoutText>
            Entraremos em contato a respeito da carta de interesse
          </ProducttContactFormLayoutText>
          <ProductContactFormLayoutFieldsContainer>
            {children}
          </ProductContactFormLayoutFieldsContainer>
        </ProductContactFormLayoutContentContainer>
      </ProductContactFormLayoutInnerContainer>
    </ProductContactFormLayoutRoot>
  );
};

export default ProductContactFormLayout;
