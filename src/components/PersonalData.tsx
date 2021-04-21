import React from "react";

import { Field, Form, Formik, ErrorMessage } from "formik";
import { TextField, Button } from "@material-ui/core";
import * as Yup from "yup";
import { FormValue } from "../Types/personalType";

let DataSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(5, "Must be 5 characters or more")
    .required("Required"),
  lastName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(5, "Must be 5 characters or more")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

interface propData {
  submit: (activeStep: number) => void;
  setValues: (value: {}) => void;
  prevValues: any;
}
// interface propDataVl {
//   prevValues: {};
// }
export const PersonalData = ({ submit, setValues, prevValues }: propData) => {
  const handleSubmit = (values: FormValue): void => {
    submit(1);
    setValues({ ...values });
  };

  return (
    <div>
      <div>
        <Formik
          initialValues={prevValues}
          validationSchema={DataSchema}
          onSubmit={handleSubmit}
        >
          {({ dirty, isValid }) => (
            <Form>
              <div>
                <Field
                  as={TextField}
                  margin="normal"
                  name="firstName"
                  label="First Name"
                  color="primary"
                  variant="outlined"
                  helperText={<ErrorMessage name="firstName" />}
                  autoFocus
                />
              </div>
              <div>
                <Field
                  as={TextField}
                  margin="normal"
                  name="lastName"
                  label="Last Name"
                  color="primary"
                  variant="outlined"
                  helperText={<ErrorMessage name="lastName" />}
                />
              </div>
              <div>
                <Field
                  as={TextField}
                  margin="normal"
                  name="email"
                  label="E-mail"
                  color="primary"
                  variant="outlined"
                  helperText={<ErrorMessage name="email" />}
                />
              </div>
              <Button type="submit" variant="contained" color="primary">
                Next
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
