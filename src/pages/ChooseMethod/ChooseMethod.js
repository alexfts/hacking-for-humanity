import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const ChooseMethod = ({ location }) => {
  const litter = location.state && location.state.litter;
  const name = location.state && location.state.name;
  return (
    <div>
      Where would you put the trash?
      <Button
        component={Link}
        to={{
          pathname: '/landfill',
          state: {
            litter: litter,
            name: name,
            method: 'landfill'
          }
        }}
      >
        trash
      </Button>
      <Button
        component={Link}
        to={{
          pathname: '/compost',
          state: {
            litter: litter,
            name: name,
            method: 'compost'
          }
        }}
      >
        Compost
      </Button>
      <Button
        component={Link}
        to={{
          pathname: '/recycling',
          state: {
            litter: litter,
            name: name,
            method: 'recycling'
          }
        }}
      >
        Recycling
      </Button>
    </div>
  );
};

export default withStyles(styles)(ChooseMethod);
