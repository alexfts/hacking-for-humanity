import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  withStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Slide,
  Grow
} from '@material-ui/core';

import styles from './styles';
import './styles.css';

const ChooseMethod = ({ classes, location }) => {
  if (localStorage.getItem('unlockedItems') === null) {
    localStorage.setItem('unlockedItems', ['Aluminum']);
  }
  const litter = location.state && location.state.litter;
  const name = location.state && location.state.name;

  const [litterState] = useState(true);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.container}
      spacing={24}
    >
      <Grid item xs={12} className={classes.item}>
        <Grid container direction="column" alignItems="center" justify="center">
          <Slide in={litterState} direction="down">
            <>
              <Typography variant="h2" gutterBottom>
                Where would you put this litter?
              </Typography>
              {litter && litter.url && (
                <img
                  src={litter.url}
                  className={classes.img}
                  alt={name}
                  class="box bounce-2"
                />
              )}
            </>
          </Slide>
        </Grid>
      </Grid>

      <Grid item xs={12} className={classes.item}>
        <Grid container direction="row" alignItems="center" justify="center">
          <Grow
            key={name}
            in={litterState}
            style={{ transformOrigin: '0 0 0' }}
            {...(litterState ? { timeout: 700 } : {})}
          >
            <Grid item xs={12} sm={12} md={4} className={classes.item}>
              <Card className={classes.card}>
                <CardActionArea
                  component={Link}
                  to={{
                    pathname: '/funfacts',
                    state: {
                      litter: litter,
                      name: name,
                      pathname: '/landfill'
                    }
                  }}
                >
                  <CardMedia
                    className={classes.media}
                    image="/trash-bin.png"
                    title="Trash Bin"
                  />
                  <CardActions color="primary" variant="contained">
                    <CardContent className={classes.choice}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Trash it!
                      </Typography>
                    </CardContent>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          </Grow>

          <Grow
            key={name}
            in={litterState}
            style={{ transformOrigin: '0 0 0' }}
            {...(litterState ? { timeout: 1400 } : {})}
          >
            <Grid item xs={12} sm={12} md={4} className={classes.item}>
              <Card className={classes.card}>
                <CardActionArea
                  color="primary"
                  variant="contained"
                  component={Link}
                  to={{
                    pathname: '/funfacts',
                    state: {
                      litter: litter,
                      name: name,
                      pathname: '/compost'
                    }
                  }}
                >
                  <CardMedia
                    className={classes.media}
                    image="/compost-bin.png"
                    title="Compost Bin"
                  />
                  <CardActions color="primary" variant="contained">
                    <CardContent className={classes.choice}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Compost it!
                      </Typography>
                    </CardContent>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          </Grow>

          <Grow
            key={name}
            in={litterState}
            style={{ transformOrigin: '0 0 0' }}
            {...(litterState ? { timeout: 2100 } : {})}
          >
            <Grid item xs={12} sm={12} md={4} className={classes.item}>
              <Card className={classes.card}>
                <CardActionArea
                  color="primary"
                  variant="contained"
                  component={Link}
                  to={{
                    pathname: '/funfacts',
                    state: {
                      litter: litter,
                      name: name,
                      pathname: '/recycling'
                    }
                  }}
                >
                  <CardMedia
                    className={classes.media}
                    image="/recycle-bin.png"
                    title="Recycle Bin"
                  />
                  <CardActions color="primary" variant="contained">
                    <CardContent className={classes.choice}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Recycle it!
                      </Typography>
                    </CardContent>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          </Grow>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ChooseMethod);
