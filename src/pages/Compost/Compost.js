import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Compost = props => (
  <div>
    Compost
    <Button component={Link} to="/start">
      Unlock other litters!
    </Button>
  </div>
);

export default withStyles(styles)(Compost);
