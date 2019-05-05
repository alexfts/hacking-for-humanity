import React, { useState } from 'react';
import { withStyles, Grid, Slide, Typography } from '@material-ui/core';

import funFacts from '../../data/funfacts.json';
import Loader from '../Loader';
import styles from './styles';

const FunFacts = ({ location, classes }) => {
  const litter = location.state && location.state.litter;
  const name = location.state && location.state.name;
  const pathname = location.state && location.state.pathname;
  var Random = funFacts.facts[Math.floor(Math.random() * 13)];

  const [litterState] = useState(true);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="space-between"
      className={classes.container}
    >
      <Grid item xs={12} className={classes.item}>
        <Slide in={litterState} direction="down">
          <Typography variant="h2" gutterBottom className={classes.header}>
            Fun Fact
          </Typography>
        </Slide>

        <Grid item xs={12} className={classes.item}>
          <Slide in={litterState} direction="up">
            <Typography variant="h4" gutterBottom className={classes.fact}>
              "{Random}"
            </Typography>
          </Slide>
        </Grid>

        <Grid item xs={12} className={classes.item}>
          {litter && name && pathname && (
            <Loader pathname={pathname} litter={litter} name={name} />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default withStyles(styles)(FunFacts);
