import { Form, Formik } from "formik";
import React from "react";
import ContactForm from "../Form";
import ContactFormLayout from "../Form/styles";
import ContactLayoutContainer from "./styles";

interface Props {}

const Contact = ({}: Props) => {
  return (
    <ContactLayoutContainer
      imageURL={
        "https://firebasestorage.googleapis.com/v0/b/portalbens-nextjs-hefesto.appspot.com/o/adonis%2Fgallery%2Fgroup-828.webp?alt=media"
      }
    >
      <ContactForm />
    </ContactLayoutContainer>
  );
};

export default Contact;
