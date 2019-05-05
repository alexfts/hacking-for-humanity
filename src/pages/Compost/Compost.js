import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import litterData from '../../data/litter.json';
import styles from './styles';
import Frown from '@material-ui/icons/MoodBad'


const unlockNewItem = () => {
  const unlockedItems = localStorage.getItem('unlockedItems').split(',');
  const newItemName = Object.keys(litterData.litter)[unlockedItems.length];
  localStorage.setItem('unlockedItems', [...unlockedItems, newItemName]);
};

const Compost = ({ location, classes }) => {
  if (localStorage.getItem('unlockedItems') === null) {
    localStorage.setItem('unlockedItems', ['Aluminum', 'Compost', 'Paper']);
  }
  const litter = location.state && location.state.litter;
  const name = location.state && location.state.name;
  const isCorrectMethod = litter && litter.correctMethod === 'compost';
  if (isCorrectMethod) {
    // ensure we haven't visited this item yet
    const visitedItems = localStorage.getItem('visitedItems');
    if (!visitedItems) {
      unlockNewItem();
      localStorage.setItem('visitedItems', [name]);
    } else if (!visitedItems.includes(name)) {
      unlockNewItem();
      localStorage.setItem('visitedItems', [...visitedItems.split(','), name]);
    }
  }
  return (
    <div  className={classes.factContainer}>
      <h2 className={classes.title}>Compost</h2>
      <p>
        If you compost Aluminum, it's the same as throwing it away. 
      </p>
      <p><Frown/></p>
      <Button className={classes.title} component={Link} to="/landfill" width="50vw">
        Next
      </Button>
    </div>
  );
};

export default withStyles(styles)(Compost);
