import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonBase, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const images = [
  {
    url: '/aluminum.png',
    title: 'Aluminum',
    width: '40%'
  }
];

const LitterButton = ({ classes }) => {
  const image = images[0];

  return (
    <div className={classes.root}>
      <ButtonBase
        focusRipple
        key={image.title}
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: image.width
        }}
        component={Link}
        to="/choose-method"
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${image.url})`
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
            {image.title}
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
    </div>
  );
};

export default withStyles(styles)(LitterButton);
