import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DeliveryForm from "../forms/delivery.form";
import FlutterPayment from "../../flutterwave/flutterwave"
import { StoreContext } from "../../mobxState/stateManagment";
import { useObserver } from "mobx-react";
import { createOrder } from "../../services/productService";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));



function getSteps() {
  return ['delivery address', 'confirm payment', 'place order'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <DeliveryForm />;
    case 1:
      return <FlutterPayment />;
    default:
      return <Button 
      variant="contained"
      style={{backgroundColor: "darkblue", color: "white"}}
      onClick={async () => {
        try {
          await createOrder()
        } catch (error) {
          
        }
      }}> Place Your Order </Button>;
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();

  const store = useContext(StoreContext)

  const [activeStep, setActiveStep] = React.useState(store.checkout.current);
  const steps = Object.keys(store.checkout.active);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  

  return useObserver( () => (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  {store.checkout.active[label] ?  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button> : null}
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  )
  );
}
