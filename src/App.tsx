import React from "react";
import "./App.css";

import { Stepper, StepLabel, Step } from "@material-ui/core";
import { PersonalData } from "./components/PersonalData";
import { Address } from "./components/Address";
import { Review } from "./components/Review";

function App() {
  const [activeStep, setActiveStep] = React.useState(1);
  function getStepContent(step: number) {
    switch (step) {
      case 1:
        return <PersonalData />;
      case 2:
        return <Address />;
      case 3:
        return <Review />;
      default:
        return "Unknown step";
    }
  }
  return (
    <div className="App">
      <div className="main-class">MultiStep-Form</div>
      <div className="stepper-class">
        <Stepper
          style={{ width: "22%" }}
          activeStep={activeStep}
          orientation="horizontal"
        >
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </div>
      {getStepContent(2)}
      {/* <PersonalData /> */}
    </div>
  );
}

export default App;
