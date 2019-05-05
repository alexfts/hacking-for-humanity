import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Compost = ({ location }) => {
  if (localStorage.getItem('unlockedItems') === null) {
    localStorage.setItem('unlockedItems', ['Aluminum', 'Compost', 'Paper']);
  }
  const litter = location.state && location.state.litter;
  const name = location.state && location.state.name;
  return (
    <div>
      Compost
      <Button component={Link} to="/start">
        Unlock other litters!
      </Button>
    </div>
  );
};

export default withStyles(styles)(Compost);
