import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import litterData from '../../data/litter.json';
import styles from './styles';

const unlockNewItem = () => {
  const unlockedItems = localStorage.getItem('unlockedItems').split(',');
  const newItemName = Object.keys(litterData.litter)[unlockedItems.length];
  localStorage.setItem('unlockedItems', [...unlockedItems, newItemName]);
};

const Recycling = ({ location }) => {
  if (localStorage.getItem('unlockedItems') === null) {
    localStorage.setItem('unlockedItems', ['Aluminum', 'Compost', 'Paper']);
  }
  const litter = location.state && location.state.litter;
  const name = location.state && location.state.name;
  const isCorrectMethod = litter && litter.correctMethod === 'recycle';
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
    <div>
      Recycling
      <Button component={Link} to="/start">
        Unlock other litters!
      </Button>
    </div>
  );
};

export default withStyles(styles)(Recycling);
