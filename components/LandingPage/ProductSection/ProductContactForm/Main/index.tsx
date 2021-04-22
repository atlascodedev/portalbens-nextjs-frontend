import React from "react";
import AtlasBackdrop from "../../../../Util/AtlasBackdrop";
import ProductContactFormLayout, {
  ProductContactFormLayoutProps,
} from "../styles";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Grid, TextField } from "@material-ui/core";
import { AccountCircle, Email, Phone } from "@material-ui/icons";
import NumberFormat from "react-number-format";
import axios from "axios";
import useEnhancedDialog from "../../../../../hooks/useEnhancedDialog";

interface Props extends ProductContactFormLayoutProps {
  open: boolean;
  toggleVisibility: (open: boolean) => void;
  cardDetails?: string;
  toggleFeedback: (open: boolean) => void;
  loadingFeedback: (loading: boolean) => void;
}

const ProductContactForm = ({
  open,
  toggleVisibility,
  cardDetails,
  toggleFeedback,
  loadingFeedback,
}: Props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: cardDetails,
    },
    enableReinitialize: true,
    validateOnMount: true,
    validationSchema: Yup.object({
      name: Yup.string().required("Este campo é obrigatório"),
      email: Yup.string()
        .email("É preciso ser um email válido")
        .required("Este campo é obrigatório"),
      phone: Yup.string().required("Este campo é obrigatório"),
      message: Yup.string().required("Este campo é obrigatório"),
    }),

    onSubmit: (values, actions) => {
      toggleVisibility(false);
      loadingFeedback(true);
      axios
        .post(
          "https://us-central1-atlascodedev-landing.cloudfunctions.net/api/sendMail/portalbens",
          {
            name: values.name,
            email: values.email,
            phone: values.phone,
            message: values.message,
          }
        )
        .then((result) => {
          toggleFeedback(true);
          actions.setSubmitting(false);
          actions.resetForm();
          loadingFeedback(false);
        })
        .catch((error) => {
          actions.setSubmitting(false);
          actions.resetForm();
          loadingFeedback(false);
        });
    },
  });

  const handleFormClose = () => {
    toggleVisibility(false);
    formik.resetForm();
  };

  return (
    <AtlasBackdrop
      closeFn={() => handleFormClose()}
      open={open}
      onClose={() => toggleVisibility(false)}
    >
      <ProductContactFormLayout>
        <div style={{ paddingTop: "15px", width: "100%" }}>
          <Grid
            container
            spacing={1}
            alignItems="flex-end"
            justify="flex-start"
          >
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField
                name="name"
                value={formik.values["name"]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched["name"] && Boolean(formik.errors["name"])}
                fullWidth
                label="Nome"
                helperText={formik.errors["name"]}
              />
            </Grid>
          </Grid>
        </div>

        <div style={{ paddingTop: "15px", width: "100%" }}>
          <Grid
            container
            spacing={1}
            alignItems="flex-end"
            justify="flex-start"
          >
            <Grid item>
              <Phone />
            </Grid>
            <Grid item>
              <NumberFormat
                customInput={TextField}
                format={"(##) #-####-####"}
                value={formik.values["phone"]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched["phone"] && Boolean(formik.errors["phone"])
                }
                helperText={formik.errors["phone"]}
                name="phone"
                fullWidth
                label="Telefone"
              />
            </Grid>
          </Grid>
        </div>

        <div style={{ paddingTop: "15px", width: "100%" }}>
          <Grid
            container
            spacing={1}
            alignItems="flex-end"
            justify="flex-start"
          >
            <Grid item>
              <Email />
            </Grid>
            <Grid item>
              <TextField
                name="email"
                value={formik.values["email"]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched["email"] && Boolean(formik.errors["email"])
                }
                helperText={formik.errors["email"]}
                fullWidth
                label="Email"
              />
            </Grid>
          </Grid>
        </div>

        <div style={{ paddingTop: "25px" }}>
          <Button
            color="primary"
            variant="contained"
            disabled={formik.isSubmitting || !formik.isValid}
            onClick={() => formik.submitForm()}
          >
            Enviar
          </Button>
        </div>
      </ProductContactFormLayout>
    </AtlasBackdrop>
  );
};

export default ProductContactForm;
