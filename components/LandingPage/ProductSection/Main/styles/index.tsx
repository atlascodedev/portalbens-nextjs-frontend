import styled from "styled-components";

const ProductSectionRoot = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 10%;
  padding-bottom: 10%;
  background-color: #fff;
  position: relative;
`;

const ProductSectionDetail = styled.img`
  width: 42px;
  height: 150px;
  position: absolute;
  top: 0;
  left: 5%;
  z-index: 50;

  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const ProductSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ProductSectionLayoutProps {
  children: React.ReactNode;
}

const ProductSectionLayout = ({ children }: ProductSectionLayoutProps) => {
  return (
    <ProductSectionRoot>
      <ProductSectionDetail src={"/images/detail-5-red.svg"} />
      <ProductSectionInnerContainer>{children}</ProductSectionInnerContainer>
    </ProductSectionRoot>
  );
};

export default ProductSectionLayout;
