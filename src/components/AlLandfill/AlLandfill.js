import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  MobileStepper,
  Paper,
  Typography,
  withStyles
} from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import styles from './styles';

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60'
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80'
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60'
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60'
  }
];

class SwipeableTextMobileStepper extends React.Component {
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

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography>{tutorialSteps[activeStep].label}</Typography>
        </Paper>
        {/* <AutoPlaySwipeableViews
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
        </AutoPlaySwipeableViews> */}

        <MobileStepper
          variant="progress"
          steps={4}
          position="static"
          activeStep={this.state.activeStep}
          className={classes.root}
          nextButton={
            <Button
              size="small"
              onClick={this.handleNext}
              disabled={this.state.activeStep === 5}
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
              size="small"
              onClick={this.handleBack}
              disabled={this.state.activeStep === 0}
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

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(
  SwipeableTextMobileStepper
);

// class ProgressMobileStepper extends React.Component {
//   state = {
//     activeStep: 0
//   };

//   handleNext = () => {
//     this.setState(state => ({
//       activeStep: state.activeStep + 1
//     }));
//   };

//   handleBack = () => {
//     this.setState(state => ({
//       activeStep: state.activeStep - 1
//     }));
//   };

//   render() {
//     const { classes, theme } = this.props;

//     return (
//       <MobileStepper
//         variant="progress"
//         steps={4}
//         position="static"
//         activeStep={this.state.activeStep}
//         className={classes.root}
//         nextButton={
//           <Button
//             size="small"
//             onClick={this.handleNext}
//             disabled={this.state.activeStep === 5}
//           >
//             Next
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button
//             size="small"
//             onClick={this.handleBack}
//             disabled={this.state.activeStep === 0}
//           >
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//             Back
//           </Button>
//         }
//       />
//     );
//   }
// }

// ProgressMobileStepper.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired
// };

// export default withStyles(styles, { withTheme: true })(ProgressMobileStepper);