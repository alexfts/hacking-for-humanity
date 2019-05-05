import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

import styles from './styles';

const tutorialSteps = [
  {
    label:
      'You place the can into the blue bin to be recycled. It gets shipped to a materials recovery facility where they are cleaned, sorted into different metal streams and later compressed into bales.',
    imgPath: '../recyclebackground1.jpg'
  },
  {
    label:
      'The aluminum blocks bales are transported to a processing plant where they are shredded into tiny pieces and taken by the conveyor system into a specialized decoater.',
    imgPath: '../recyclebackground1.jpg'
  },
  {
    label:
      'After this, they are taken to a holding furnace where they are melted down into ingots, lifted by an overhead careen, and dispatched to the rolling mill. The ingots are then rolled out making thin sheets of aluminum',
    imgPath: '../recyclebackground1.jpg'
  },
  {
    label:
      'They are then repurposed into new Aluminum products, saving 90-95% of the energy used to make a new one!',
    imgPath: '../recyclebackground1.jpg'
  }
];

class TextMobileStepper extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography className={classes.label} variant="h6">
            {tutorialSteps[activeStep].label}
          </Typography>
        </Paper>

        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className={classes.img}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </SwipeableViews>

        {activeStep === 3 ? (
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/choose-litter"
              className={classes.buttonEnd}
            >
              Back to Litter
            </Button>
          </div>
        ) : null}

        <MobileStepper
          variant="progress"
          color="secondary"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button
              className={classes.stepBtn}
              size="large"
              onClick={this.handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              className={classes.stepBtn}
              size="large"
              onClick={this.handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

TextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(TextMobileStepper);
