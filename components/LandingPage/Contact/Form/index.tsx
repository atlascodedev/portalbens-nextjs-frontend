import { Button, Grid, InputAdornment, TextField } from "@material-ui/core";
import { AccountCircle, Email, Person, Phone } from "@material-ui/icons";
import { Form, Formik } from "formik";
import React from "react";
import ContactFormLayout from "./styles";

interface Props {}

const ContactForm = (props: Props) => {
  return (
    <ContactFormLayout>
      <div style={{ paddingTop: "25px", width: "100%" }}>
        <Grid container spacing={1} alignItems="flex-end" justify="flex-start">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField fullWidth label="Nome" />
          </Grid>
        </Grid>
      </div>

      <div style={{ paddingTop: "25px", width: "100%" }}>
        <Grid container spacing={1} alignItems="flex-end" justify="flex-start">
          <Grid item>
            <Phone />
          </Grid>
          <Grid item>
            <TextField fullWidth label="Telefone" />
          </Grid>
        </Grid>
      </div>

      <div style={{ paddingTop: "25px", width: "100%" }}>
        <Grid container spacing={1} alignItems="flex-end" justify="flex-start">
          <Grid item>
            <Email />
          </Grid>
          <Grid item>
            <TextField fullWidth label="Email" />
          </Grid>
        </Grid>
      </div>

      <div style={{ paddingTop: "45px", width: "100%" }}>
        <Grid container spacing={1} justify="center">
          <Grid style={{ width: "100%" }} item>
            <TextField
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
        <Button
          style={{ backgroundColor: "#324E3E", color: "#fff" }}
          size="large"
          variant="contained"
        >
          Enviar!
        </Button>
      </div>
    </ContactFormLayout>
  );
};

export default ContactForm;
