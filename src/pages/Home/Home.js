import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Home = props => (
  <div>
    Home page!
    <Button aria-label="Select your trash" component={Link} to="/choose-litter">
      Start
    </Button>
  </div>
);

export default withStyles(styles)(Home);
