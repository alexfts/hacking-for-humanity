import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, ButtonBase } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import LitterButton from '../../components/LitterButton';
import litterData from '../../data/litter.json';

const ChooseLitter = function(props) {
  if (localStorage.getItem('unlockedItems') === null) {
    localStorage.setItem('unlockedItems', ['Aluminum', 'Compost', 'Paper']);
  }
  const litterStorage = litterData.litter;
  const litterNames = Object.keys(litterStorage);
  return (
    <Grid container background-color="secondary">
      {litterNames.map(name => (
        <Grid item key={name}>
          <LitterButton litter={litterStorage[name]} name={name} />
        </Grid>
      ))}
    </Grid>
  );
};

export default withStyles(styles)(ChooseLitter);
