import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonBase, Typography, Modal } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const LitterButton = ({ classes, litter, name }) => {
  const onSubmit = card => {
    const { number, exp_month, exp_year, cvc, name, zip } = card;
  };
  const [open, setOpen] = useState(false);
  const isUnlocked =
    localStorage.getItem('unlockedItems') &&
    localStorage
      .getItem('unlockedItems')
      .split(',')
      .includes(name);
  return (
    <div className={classes.root}>
      {isUnlocked ? (
        <ButtonBase
          focusRipple
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            // width: '100%'
            width: '200px',
            height: '200px',
            borderRadius: '50%'
          }}
          component={Link}
          to={{
            pathname: '/choose-method',
            state: {
              litter: litter,
              name: name
            }
          }}
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
              color="primary"
              className={classes.imageTitle}
            >
              {name}
            </Typography>
          </span>
        </ButtonBase>
      ) : (
        <ButtonBase
          focusRipple
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            // width: '100%'
            width: '200px',
            height: '200px',
            borderRadius: '50%'
          }}
          onClick={() => {
            setOpen(true);
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
          <span className={classes.imageButton} />
        </ButtonBase>
      )}
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className={classes.paper} />
      </Modal>
    </div>
  );
};

export default withStyles(styles)(LitterButton);
