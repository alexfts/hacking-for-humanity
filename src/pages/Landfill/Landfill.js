import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import AlLandfill from '../../components/AlLandfill';
import landfillImg from '../../images/skynews-food-waste.jpg';

const Landfill = ({ location }) => {
  if (localStorage.getItem('unlockedItems') === null) {
    localStorage.setItem('unlockedItems', ['Aluminum', 'Compost', 'Paper']);
  }
  const litter = location.state && location.state.litter;
  const name = location.state && location.state.name;
  return (
    <div className={styles.landfill}>
      Landfill
      <div className={styles.buttonContainer}>
        <Button component={Link} to="/choose-litter">
          Back to Litter
        </Button>
        <Button component={Link} to="/choose-method">
          Select another method
        </Button>
      </div>
      <AlLandfill />
    </div>
  );
};

export default withStyles(styles)(Landfill);
