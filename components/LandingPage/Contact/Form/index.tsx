import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { AccountCircle, Email, Person, Phone } from "@material-ui/icons";
import { Form, Formik, useFormik } from "formik";
import React from "react";
import ContactFormLayout from "./styles";
import * as Yup from "yup";
import NumberFormat from "react-number-format";

interface Props {}

const ContactForm = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    enableReinitialize: true,
    isInitialValid: false,
    validationSchema: Yup.object({
      name: Yup.string().required("Este campo é obrigatório"),
      email: Yup.string()
        .required("Este campo é obrigatório")
        .email("É preciso ser um e-mail válido"),
      phone: Yup.string().required("Este campo é obrigatório"),
      message: Yup.string().required("Este campo é obrigatório"),
    }),

    onSubmit: (values, actions) => console.log("ass"),
  });

  return (
    <ContactFormLayout>
      <div style={{ paddingTop: "25px", width: "100%" }}>
        <Grid container spacing={1} alignItems="flex-end" justify="flex-start">
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

      <div style={{ paddingTop: "25px", width: "100%" }}>
        <Grid container spacing={1} alignItems="flex-end" justify="flex-start">
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
              error={formik.touched["phone"] && Boolean(formik.errors["phone"])}
              helperText={formik.errors["phone"]}
              name="phone"
              fullWidth
              label="Telefone"
            />
          </Grid>
        </Grid>
      </div>

      <div style={{ paddingTop: "25px", width: "100%" }}>
        <Grid container spacing={1} alignItems="flex-end" justify="flex-start">
          <Grid item>
            <Email />
          </Grid>
          <Grid item>
            <TextField
              name="email"
              value={formik.values["email"]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched["email"] && Boolean(formik.errors["email"])}
              helperText={formik.errors["email"]}
              fullWidth
              label="Email"
            />
          </Grid>
        </Grid>
      </div>

      <div style={{ paddingTop: "45px", width: "100%" }}>
        <Grid container spacing={1} justify="center">
          <Grid style={{ width: "100%" }} item>
            <TextField
              value={formik.values["message"]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched["message"] && Boolean(formik.errors["message"])
              }
              helperText={formik.errors["message"]}
              name="message"
              fullWidth
              label="Mensagem"
              multiline
              variant="outlined"
              rowsMax={4}
              rows={4}
            />
          </Grid>
        </Grid>
      </div>

      <div
        style={{
          width: "100%",
          paddingTop: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tooltip
          title={
            formik.isValid
              ? ""
              : "Verifique todos os campos antes de prosseguir"
          }
        >
          <span>
            <Button
              color="primary"
              size="large"
              variant="contained"
              onClick={() => console.log(formik.dirty)}
              disabled={!formik.isValid}
            >
              Enviar!
            </Button>
          </span>
        </Tooltip>
      </div>
    </ContactFormLayout>
  );
};

export default ContactForm;
