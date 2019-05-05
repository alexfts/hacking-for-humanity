import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Landfill = ({ location }) => {
  const litter = location.state && location.state.litter;
  const name = location.state && location.state.name;
  return (
    <div>
      Landfill
      <Button component={Link} to="/start">
        Unlock other litters!
      </Button>
    </div>
  );
};

export default withStyles(styles)(Landfill);
