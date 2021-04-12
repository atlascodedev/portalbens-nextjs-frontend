import React from "react";
import TestimonialCardLayoutContainer, {
  TestimonialCardLayoutContainerProps,
} from "./styles";

interface TestimonialCardProps extends TestimonialCardLayoutContainerProps {}

const TestimonialCard = ({
  imageURL,
  text,
  title,
  location,
}: TestimonialCardProps) => {
  return (
    <TestimonialCardLayoutContainer
      imageURL={imageURL}
      text={text}
      location={location}
      title={title}
    />
  );
};

export default TestimonialCard;
