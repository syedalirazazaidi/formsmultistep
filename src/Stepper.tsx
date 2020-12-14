import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { PersonalData } from "./components/PersonalData";
import { Address } from "./components/Address";
import { Review } from "./components/Review";
import "./App.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: "2%",
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

function getSteps() {
  return ["Personal Data", "Add  Address", "Review"];
}

function getStepContent(
  stepIndex: number,
  setActiveStep: React.Dispatch<React.SetStateAction<number>>,
  value: {},
  setValues: React.Dispatch<React.SetStateAction<{}>>
) {
  switch (stepIndex) {
    case 0:
      return (
        <PersonalData
          submit={setActiveStep}
          prevValues={value}
          setValues={setValues}
        />
      );
    case 1:
      return (
        <Address
          submit={setActiveStep}
          prevValues={value}
          setValues={setValues}
        />
      );
    case 2:
      return <Review submit={setActiveStep} value={value} />;
    default:
      return "Unknown stepIndex";
  }
}

export default function StepFormall() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [value, setValues] = React.useState({});
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="contaStep">
        {getStepContent(activeStep, setActiveStep, value, setValues)}
      </div>
      <div className="contaStep"></div>
    </div>
  );
}
