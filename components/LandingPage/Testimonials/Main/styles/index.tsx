import styled from "styled-components";
import EtusBar from "../../../../Util/EtusBar";

const TestimonialsRoot = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding-top: 5%;
  padding-bottom: 5%;
  padding-left: 6%;
  padding-right: 6%;
`;

const TestimonialsInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const TestimonialsTitleContainer = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 1024px) {
    font-size: 35px;
    align-items: center;
  }
`;

const TestimonialsCardContainer = styled.div``;

interface TestimonialsLayoutContainerProps {}

const TestimonialsLayoutContainer = ({}: TestimonialsLayoutContainerProps) => {
  return (
    <TestimonialsRoot>
      <TestimonialsInnerContainer>
        <TestimonialsTitleContainer>
          <div>Depoimentos dos nossos contemplados</div>
          <EtusBar width={"200px"} />
        </TestimonialsTitleContainer>
        <TestimonialsCardContainer></TestimonialsCardContainer>
      </TestimonialsInnerContainer>
    </TestimonialsRoot>
  );
};

export default TestimonialsLayoutContainer;
