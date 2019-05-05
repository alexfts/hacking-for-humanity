import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import funFacts from '../../data/funfacts.json';

const FunFacts = props => {
    var Random = funFacts.facts[Math.floor(Math.random() * 13)];
    
    return (
    <div>
        <p>
        {Random}
        </p>
    </div>
);
    }
export default withStyles(styles)(FunFacts);