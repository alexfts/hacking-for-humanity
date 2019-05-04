import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const ChooseLitter = props => (
  <div>
    Pick your litter!
    <Button component={Link} to="/choose-method">
      pick recycling method
    </Button>
  </div>
);

export default withStyles(styles)(ChooseLitter);
