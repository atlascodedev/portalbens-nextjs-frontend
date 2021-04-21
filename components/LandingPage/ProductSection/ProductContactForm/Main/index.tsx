import React from "react";
import AtlasBackdrop from "../../../../Util/AtlasBackdrop";
import ProductContactFormLayout, {
  ProductContactFormLayoutProps,
} from "../styles";
import * as Yup from "yup";
import { useFormik } from "formik";

interface Props extends ProductContactFormLayoutProps {
  open: boolean;
  toggleVisibility: (open: boolean) => void;
}

const ProductContactForm = ({ open, toggleVisibility }: Props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Este campo é obrigatório"),
      email: Yup.string()
        .email("É preciso ser um email válido")
        .required("Este campo é obrigatório"),
      phone: Yup.string().required("Este campo é obrigatório"),
      message: Yup.string().required("Este campo é obrigatório"),
    }),

    onSubmit: () => {},
  });

  return (
    <AtlasBackdrop
      closeFn={() => toggleVisibility(false)}
      open={open}
      onClose={() => toggleVisibility(false)}
    >
      <ProductContactFormLayout>
          
      </ProductContactFormLayout>
    </AtlasBackdrop>
  );
};

export default ProductContactForm;
