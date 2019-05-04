import React from 'react';
import { Link } from 'react-router-dom';
import { Button, withStyles, Typography, Grid } from '@material-ui/core';
import styles from './styles';
// import classes from '*.module.css';

const Home = ({ classes }) => (
  <Grid
    container
    className={classes.container}
    direction="row"
    alignItems="center"
    justify="center"
  >
    <Grid item xs={12} sm={12} md={6} className={classes.item}>
      <Typography variant="display4" className={classes.headline}>
        Reduce. Reuse. Recycle.
      </Typography>
    </Grid>
    <Grid item xs={12} sm={12} md={6} className={classes.item}>
      <Button
        variant="outlined"
        aria-label="Select your trash"
        component={Link}
        to="/choose-litter"
        color="secondary"
      >
        Start
      </Button>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Home);
