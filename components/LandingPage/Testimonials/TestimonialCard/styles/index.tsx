import styled from "styled-components";
import AdonisImage from "../../../../Util/AdonisImage";

const TestimonialCardRoot = styled.div`
  width: 298px;
  height: auto;
  font-family: "Roboto";

  text-align: center;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  @media (min-width: 1024px) {
    width: 330px;
    height: 405px;
  }
`;

const TestimonialCardInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TestimonialCardTitle = styled.div`
  margin-bottom: 28px;
  font-size: 18px;
  font-weight: bold;

  @media (min-width: 1024px) {
    font-size: 21px;
  }
`;

interface TestimonialCardPictureProps {
  imageURL?: string;
}

const TestimonialCardPicture = styled.div`
  background: #78e08f;
  border-radius: 4px;
  width: 97.75px;
  height: 90.51px;
  margin-top: 19px;
  margin-bottom: 17px;

  @media (min-width: 1024px) {
    width: 108px;
    height: 100px;
  }
`;

const TestimonialCardContent = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  font-size: 16px;
`;

const TestimonialCardFooter = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  font-size: 16px;
  margin-top: auto;
  font-weight: 700;
  margin-bottom: 15px;
`;

export interface TestimonialCardLayoutContainerProps {
  imageURL: string;
  title: string;
  text: string;
  location: string;
}

const TestimonialCardLayoutContainer = ({
  imageURL,
  text,
  title,
  location,
}: TestimonialCardLayoutContainerProps) => {
  return (
    <TestimonialCardRoot>
      <TestimonialCardInnerContainer>
        <TestimonialCardPicture>
          <AdonisImage
            imageURL={imageURL}
            objectFit="fill"
            borderRadius={"6px"}
            small
          />
        </TestimonialCardPicture>
        <TestimonialCardTitle>{title}</TestimonialCardTitle>
        <TestimonialCardContent>{text}</TestimonialCardContent>
        <TestimonialCardFooter>{location}</TestimonialCardFooter>
      </TestimonialCardInnerContainer>
    </TestimonialCardRoot>
  );
};

export default TestimonialCardLayoutContainer;
