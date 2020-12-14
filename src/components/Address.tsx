import React from "react";

import { Field, Form, Formik, FormikProps, ErrorMessage } from "formik";
import { TextField, Button } from "@material-ui/core";

import { useFormik } from "formik";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import * as Yup from "yup";
import { AdressValue } from "../Types/personalType";
const useStyles = makeStyles((theme: Theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: theme.spacing(1),
  },
}));
let DataSchema = Yup.object().shape({
  area: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(5, "Must be 5 characters or more")
    .required("Required"),
  city: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(5, "Must be 5 characters or more")
    .required("Required"),
  country: Yup.string().required("Required"),
});

const initialValues: AdressValue = {
  area: "",
  city: "",
  country: "",
};
interface propData {
  submit: (activeStep: number) => void;
  setValues: (value: {}) => void;
  prevValues: any;
}
export const Address = ({ submit, setValues, prevValues }: propData) => {
  const handleSubmit = (values: AdressValue): void => {
    submit(2);
    setValues({ ...values, ...prevValues });
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
                  name="area"
                  label="Area"
                  color="primary"
                  variant="outlined"
                  helperText={<ErrorMessage name="area" />}
                  autoFocus
                />
              </div>
              <div>
                <Field
                  as={TextField}
                  margin="normal"
                  name="city"
                  label="City"
                  color="primary"
                  variant="outlined"
                  helperText={<ErrorMessage name="city" />}
                />
              </div>
              <div>
                <Field
                  as={TextField}
                  margin="normal"
                  name="country"
                  label="Country"
                  color="primary"
                  variant="outlined"
                  helperText={<ErrorMessage name="country" />}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button type="submit" variant="contained" color="primary">
                  Next
                </Button>
                <Button
                  type="submit"
                  onClick={() => submit(0)}
                  variant="contained"
                  color="primary"
                >
                  Back
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
