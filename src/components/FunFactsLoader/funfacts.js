import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import funFacts from '../../data/funfacts.json';
import Loader from '../Loader';
import QuoteIcon from '@material-ui/icons/FormatQuote'

const FunFacts = ({classes}) => {
    var Random = funFacts.facts[Math.floor(Math.random() * 13)];
    return (
    <div className={classes.factContainer}>
        <h1 className={classes.title}>Fun Fact!</h1>
        
        <p className={classes.fact}>
        <QuoteIcon/>
            {Random}
        <QuoteIcon/>
        </p>
        <Loader />
    </div>
);
    }
export default withStyles(styles)(FunFacts);