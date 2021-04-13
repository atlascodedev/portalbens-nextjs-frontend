import styled from "styled-components";
import EtusBar from "../../../../Util/EtusBar";

const PartnersRoot = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  padding-top: 5%;
  padding-bottom: 5%;
`;

const PartnersInnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PartnersTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #333;
  font-size: 35px;
  padding-left: 6%;
  padding-right: 6%;

  @media (min-width: 1024px) {
    align-items: center;
  }
`;

const PartnersCardContainer = styled.div`
  width: 100%;
  height: 100%;
`;

interface PartnersCardProps {
  imageURL: string;
}

const PartnersCardRoot = styled.div<PartnersCardProps>`
  width: 220px;
  height: 140.34px;

  background: #ffffff;
  border: 1px solid rgba(51, 51, 51, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  background-image: ${(props) => `url(${props.imageURL})`};
  background-position: center center;
  background-size: contain;
  padding: 10px;
  background-origin: content-box;
  background-repeat: no-repeat;
`;

export const PartnersCard = ({ imageURL }: PartnersCardProps) => {
  return <PartnersCardRoot imageURL={imageURL} />;
};

interface PartnersLayoutContainerProps {
  children: React.ReactNode;
}

const PartnersLayoutContainer = ({
  children,
}: PartnersLayoutContainerProps) => {
  return (
    <PartnersRoot>
      <PartnersInnerContainer>
        <PartnersTitleContainer>
          <div>Nossos parceiros</div>
          <EtusBar />
        </PartnersTitleContainer>
      </PartnersInnerContainer>
      <PartnersCardContainer>{children}</PartnersCardContainer>
    </PartnersRoot>
  );
};

export default PartnersLayoutContainer;
