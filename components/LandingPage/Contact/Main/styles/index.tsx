import styled from "styled-components";
import AdonisImage from "../../../../Util/AdonisImage";

const ContactRoot = styled.div`
  background-color: #e0e0e0;
  width: 100%;
  padding-bottom: 10%;

  @media (min-width: 1024px) {
    padding-bottom: 5%;
  }
`;

const ContactInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const ContactInnerFormContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    max-width: calc(100% - 43%);
    min-width: calc(100% - 43%);
    order: 0;
  }
`;

const ContactInnerImageContainer = styled.div`
  position: relative;
  height: 100%;

  @media (min-width: 1024px) {
    max-width: 43%;
    min-width: 43%;
    order: 1;
  }
`;

const ContactInnerImage = styled.img`
  width: 100%;
  transform: translateY(-10px);
`;

const ContactInnerImageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-left: 6%;
  padding-right: 6%;
  margin-bottom: 10%;

  @media (min-width: 1024px) {
    text-align: right;
    padding-right: 15%;
    padding-left: 0px;
    margin-bottom: 0px;
  }
`;

const ContactInnerImageTextTitle = styled.div`
  font-size: 20px;
  color: #da4e49;

  @media (min-width: 1024px) {
    font-size: 35px;
  }
`;

const ContactInnerImageTextAux = styled.div`
  font-family: "Roboto";

  font-size: 14.6px;

  @media (min-width: 1024px) {
    font-size: 25px;
  }
`;

const ContactInnerImageDetailOne = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 150px;
  width: 40px;
  z-index: 100;
  transform: translate(-75px, -10px);
`;

interface ContactLayoutContainerProps {
  imageURL: string;
  children: React.ReactNode;
}

const ContactLayoutContainer = ({
  imageURL = "https://via.placeholder.com/500",
  children,
}: ContactLayoutContainerProps) => {
  return (
    <ContactRoot>
      <ContactInnerContainer>
        <ContactInnerImageContainer>
          <AdonisImage imageURL={imageURL} height={45} mobileHeight={100} />
          <ContactInnerImageTextContainer>
            <ContactInnerImageTextTitle>
              Invista nos seus sonhos.
            </ContactInnerImageTextTitle>
            <ContactInnerImageTextAux>
              Permita que a Portal Bens aproxime você dos seus objetivos.
            </ContactInnerImageTextAux>
          </ContactInnerImageTextContainer>
          <ContactInnerImageDetailOne src={"/images/detail-3.svg"} />
        </ContactInnerImageContainer>

        <ContactInnerFormContainer>{children}</ContactInnerFormContainer>
      </ContactInnerContainer>
    </ContactRoot>
  );
};

export default ContactLayoutContainer;
