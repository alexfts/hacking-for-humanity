import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonBase, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const LitterButton = ({ classes, litter, name }) => {
  console.log(litter);
  return (
    <div className={classes.root}>
      <ButtonBase
        focusRipple
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: '100%'
        }}
        component={Link}
        to="/choose-method"
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${litter.url})`
          }}
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            className={classes.imageTitle}
          >
            {name}
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
    </div>
  );
};

export default withStyles(styles)(LitterButton);
