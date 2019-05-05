import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonBase, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const LitterButton = ({ classes, litter, name }) => {
  const isUnlocked =
    localStorage.getItem('unlockedItems') &&
    localStorage
      .getItem('unlockedItems')
      .split(',')
      .includes(name);
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
        to={{
          pathname: '/choose-method',
          state: {
            litter: litter,
            name: name
          }
        }}
        disabled={!isUnlocked}
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: isUnlocked
              ? `url(${litter.url})`
              : `url('/lock_grey.png')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            margin: '25px'
          }}
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          <Typography
            component="span"
            variant="h5"
            color="inherit"
            className={classes.imageTitle}
          >
            {name}
          </Typography>
        </span>
      </ButtonBase>
    </div>
  );
};

export default withStyles(styles)(LitterButton);
