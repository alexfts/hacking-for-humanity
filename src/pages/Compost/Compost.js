import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, withStyles } from '@material-ui/core';
import Frown from '@material-ui/icons/SentimentVeryDissatisfied';
import { exportNamedDeclaration } from '@babel/types';

import litterData from '../../data/litter.json';
import styles from './styles';

const unlockNewItem = () => {
  const unlockedItems = localStorage.getItem('unlockedItems').split(',');
  const newItemName = Object.keys(litterData.litter)[unlockedItems.length];
  localStorage.setItem('unlockedItems', [...unlockedItems, newItemName]);
};

const Compost = ({ location, classes }) => {
  if (localStorage.getItem('unlockedItems') === null) {
    localStorage.setItem('unlockedItems', ['Aluminum']);
  }
  const litter = location.state && location.state.litter;
  const name = location.state && location.state.name;
  const isCorrectMethod = litter && litter.correctMethod === 'compost';
  if (isCorrectMethod) {
    // ensure we haven't visited this item yet
    let visitedItems = localStorage.getItem('visitedItems');
    if (!visitedItems) {
      console.log('nothing visited');
      unlockNewItem();
      localStorage.setItem('visitedItems', [name]);
    } else {
      visitedItems = visitedItems.split(',');
      console.log(visitedItems, name);
      if (!visitedItems.includes(name)) {
        console.log('unlocking!', visitedItems, name);
        unlockNewItem();
        localStorage.setItem('visitedItems', [...visitedItems, name]);
      }
    }
  }
  return (
    <div className={classes.factContainer}>
      <Typography variant="h2" gutterBottom className={classes.header}>
        Compost
      </Typography>
      {/* <h2 className={classes.title}>Compost</h2> */}
      {litter && litter.url && (
        <img src={litter.url} className={classes.img} alt={name} />
      )}
      {/* <p className={classes.fact}> */}
      <Typography variant="h4" className={classes.fact}>
        If you compost this, it's the same as throwing it away. During the
        composting process, items are sorted, and everything non-compostable is
        sent to the landfill.
      </Typography>
      {/* </p> */}

      <Button
        variant="outlined"
        color="primary"
        className={classes.title}
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
        see what happens in landfill &nbsp;
        <Frown />
      </Button>
    </div>
  );
};

export default withStyles(styles)(Compost);
