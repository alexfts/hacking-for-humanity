import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import litterData from '../../data/litter.json';
import styles from './styles';
import AlRecycling from '../../components/AlRecycling';

const unlockNewItem = () => {
  const unlockedItems = localStorage.getItem('unlockedItems').split(',');
  const newItemName = Object.keys(litterData.litter)[unlockedItems.length];
  localStorage.setItem('unlockedItems', [...unlockedItems, newItemName]);
};

const Recycling = ({ location, classes }) => {
  if (localStorage.getItem('unlockedItems') === null) {
    localStorage.setItem('unlockedItems', ['Aluminum']);
  }
  const litter = location.state && location.state.litter;
  const name = location.state && location.state.name;
  const isCorrectMethod = litter && litter.correctMethod === 'recycle';
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
    <div>
      <h2 className={classes.title}>Recycling</h2>
      {name === 'Aluminum' ? <AlRecycling /> : null}
      {/* <Button component={Link} to="/start">
        Unlock other litters!
      </Button> */}
    </div>
  );
};

export default withStyles(styles)(Recycling);
