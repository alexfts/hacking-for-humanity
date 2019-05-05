import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const ChooseMethod = ({ location }) => {
  if (localStorage.getItem('unlockedItems') === null) {
    localStorage.setItem('unlockedItems', ['Aluminum']);
  }
  const litter = location.state && location.state.litter;
  const name = location.state && location.state.name;
  return (
    <div>
      Where would you put the trash?
      <Button
        component={Link}
        to={{
          pathname: '/funfacts',
          state: {
            litter: litter,
            name: name,
            pathname: '/landfill'
          }
        }}
      >
        trash
      </Button>
      <Button
        component={Link}
        to={{
          pathname: '/funfacts',
          state: {
            litter: litter,
            name: name,
            pathname: '/compost'
          }
        }}
      >
        Compost
      </Button>
      <Button
        component={Link}
        to={{
          pathname: '/funfacts',
          state: {
            litter: litter,
            name: name,
            pathname: '/recycling'
          }
        }}
      >
        Recycling
      </Button>
    </div>
  );
};

export default withStyles(styles)(ChooseMethod);
