import React from "react";
import styled from "styled-components";

const DefenseSectionRoot = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  padding-top: 5%;
  padding-bottom: 5%;

  @media (min-width: 1024px) {
    padding-top: 8%;
    padding-bottom: 8%;
  }
`;

const DefenseSectionInnerContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const DefenseSectionChildrenWrapper = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 25px;
  margin-bottom: 25px;

  @media (min-width: 1024px) {
    margin-left: 30px;
    margin-right: 30px;
  }
`;

interface DefenseSectionLayoutContainerProps {
  children: React.ReactNode;
}

const DefenseSectionLayoutContainer = ({
  children,
}: DefenseSectionLayoutContainerProps) => {
  return (
    <DefenseSectionRoot>
      <DefenseSectionInnerContainer>{children}</DefenseSectionInnerContainer>
    </DefenseSectionRoot>
  );
};

export default DefenseSectionLayoutContainer;
