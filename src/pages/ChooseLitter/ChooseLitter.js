import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, ButtonBase } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import LitterButton from '../../components/LitterButton';

const ChooseLitter = props => {
  return (
    <div>
      Pick your litter!
      <Grid container background-color="secondary">
        <Grid item>
          <LitterButton />
        </Grid>
        <Grid item>
          <LitterButton />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(ChooseLitter);
