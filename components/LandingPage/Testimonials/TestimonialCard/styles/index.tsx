import styled from "styled-components";

const TestimonialCardRoot = styled.div`
  width: 298px;
  height: 363px;

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

const TestimonialCardTitle = styled.div``;

interface TestimonialCardPictureProps {
  imageURL?: string;
}

const TestimonialCardPicture = styled.div<TestimonialCardPictureProps>`
  background: #78e08f;
  border-radius: 4px;
  width: 97.75px;
  height: 90.51px;

  @media (min-width: 1024px) {
    width: 108px;
    height: 100px;
  }
`;

const TestimonialCardContent = styled.div``;

const TestimonialCardFooter = styled.div``;

interface TestimonialCardLayoutContainerProps {}

const TestimonialCardLayoutContainer = ({}: TestimonialCardLayoutContainerProps) => {
  return (
    <TestimonialCardRoot>
      <TestimonialCardInnerContainer>
        <TestimonialCardPicture></TestimonialCardPicture>
        <TestimonialCardTitle></TestimonialCardTitle>
        <TestimonialCardContent></TestimonialCardContent>
        <TestimonialCardFooter></TestimonialCardFooter>
      </TestimonialCardInnerContainer>
    </TestimonialCardRoot>
  );
};

export default TestimonialCardLayoutContainer;
