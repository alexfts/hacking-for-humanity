import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Landfill = ({ location }) => {
  if (localStorage.getItem('unlockedItems') === null) {
    localStorage.setItem('unlockedItems', ['Aluminum', 'Compost', 'Paper']);
  }
  const litter = location.state && location.state.litter;
  const name = location.state && location.state.name;
  return (
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
};

export default withStyles(styles)(Landfill);
