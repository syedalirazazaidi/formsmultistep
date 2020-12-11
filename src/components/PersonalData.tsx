import React from "react";

import { Field, Form, Formik, FormikProps } from "formik";
import { TextField, Button } from "@material-ui/core";

import * as yup from "yup";
let SignupSchema = yup.object().shape({
  firstName: yup.string().required("This field is required."),
  lastName: yup.string().required("This field is required."),
  email: yup.string().email().required("This field is required."),
  password: yup
    .string()
    .min(6, "Password is too short.")
    .max(20, "Password is too long.")
    .required("This field is required."),
});
export const PersonalData = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          contact: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <div>
            <TextField
              margin="normal"
              name="firstName"
              label="First Name"
              color="secondary"
              variant="outlined"
              autoFocus
            />
          </div>
          <div>
            <TextField
              margin="normal"
              name="lastName"
              label="Last Name"
              color="secondary"
              variant="outlined"
              autoFocus
            />
          </div>
          <div>
            <TextField
              margin="normal"
              name="contact"
              label="Contact No"
              color="secondary"
              variant="outlined"
              autoFocus
            />
          </div>
          <div>
            <Button variant="contained" color="primary">
              Next
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
