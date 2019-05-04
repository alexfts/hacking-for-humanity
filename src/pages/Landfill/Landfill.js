import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Landfill = props => (
  <div>
    Landfill
    <Button component={Link} to="/start">
      Choose another litters!
    </Button>
    <Button component={Link} to="/method">
      Select another method!
    </Button>
  </div>
);

export default withStyles(styles)(Landfill);
