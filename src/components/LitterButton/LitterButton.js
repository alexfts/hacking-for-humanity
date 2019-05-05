import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ButtonBase,
  Typography,
  Modal,
  TextField,
  Button,
  Avatar
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Card from 'react-credit-cards';
import styles from './styles';

const LitterButton = ({ classes, litter, name }) => {
  const handleInputFocus = ({ target }) => {};

  const handleInputChange = ({ target }) => {};

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleCallback = ({ issuer }, isValid) => {};

  const [open, setOpen] = useState(false);
  const [number, setNumber] = useState('');
  const [holderName, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [issuer, setIssuer] = useState('');
  const [focused, setFocused] = useState('');
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
        className={classes.modal}
      >
        <div className={classes.paper}>
          <Typography>
            Unlock the next secret item for $1 and we'll donate it to a local
            charity handling climate-saving initiatives!
          </Typography>
          <Avatar src={'/lock_grey.png'} />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <TextField
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="[\d| ]{16,22}"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="form-group">
              <TextField
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="row">
              <div className="col-6">
                <TextField
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
              <div className="col-6">
                <TextField
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
            </div>
            <input type="hidden" name="issuer" value={''} />
            <div className="form-actions">
              <Button className="btn btn-primary btn-block">Pay</Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default withStyles(styles)(LitterButton);
