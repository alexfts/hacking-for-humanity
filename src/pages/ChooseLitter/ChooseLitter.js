import React from 'react';
import { withStyles, Grid, Typography } from '@material-ui/core';

import litterData from '../../data/litter.json';
import LitterButton from '../../components/LitterButton';
import styles from './styles';

const ChooseLitter = function({ classes }) {
  if (localStorage.getItem('unlockedItems') === null) {
    localStorage.setItem('unlockedItems', ['Aluminum', 'Compost', 'Paper']);
  }
  const litterStorage = litterData.litter;
  const litterNames = Object.keys(litterStorage);
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="center"
      // background-color="secondary"
      className={classes.container}
    >
      <Grid item xs={12} sm={12} md={4} className={classes.item}>
        <Typography variant="h2" className={classes.headline}>
          Choose a litter.
        </Typography>
      </Grid>
      {litterNames.map(name => (
        <Grid item key={name} xs={12} sm={12} md={4} className={classes.item}>
          <LitterButton litter={litterStorage[name]} name={name} />
        </Grid>
      ))}
    </Grid>
  );
};

export default withStyles(styles)(ChooseLitter);
