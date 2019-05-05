import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import funFacts from '../../data/funfacts.json';
import Loader from '../Loader';


const FunFacts = props => {
    var Random = funFacts.facts[Math.floor(Math.random() * 13)];
    return (
    <div>
        <p>
            {Random}
        </p>
        <Loader />
    </div>
);
    }
export default withStyles(styles)(FunFacts);