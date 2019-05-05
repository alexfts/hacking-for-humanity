import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image from '../../images/skynews-food-waste.jpg';

const ChooseMethod = ({ classes, location }) => {
  if (localStorage.getItem('unlockedItems') === null) {
    localStorage.setItem('unlockedItems', ['Aluminum', 'Compost', 'Paper']);
  }
  const litter = location.state && location.state.litter;
  const name = location.state && location.state.name;
  return (
    <div className={classes.method}>
      <Typography variant="h2" className={classes.title}>
        Where would you put the trash?
      </Typography>
      <div className={classes.choices}>
        <Card className={classes.card}>
          <CardActionArea
            component={Link}
            to={{
              pathname: '/landfill',
              state: {
                litter: litter,
                name: name,
                method: 'landfill'
              }
            }}
          >
            <CardMedia
              className={classes.media}
              image={image}
              title="Contemplative Reptile"
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

        <Card className={classes.card}>
          <CardActionArea
            color="primary"
            variant="contained"
            component={Link}
            to={{
              pathname: '/compost',
              state: {
                litter: litter,
                name: name,
                method: 'compost'
              }
            }}
          >
            <CardMedia
              className={classes.media}
              image={image}
              title="Contemplative Reptile"
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

        <Card className={classes.card}>
          <CardActionArea
            color="primary"
            variant="contained"
            component={Link}
            to={{
              pathname: '/recycling',
              state: {
                litter: litter,
                name: name,
                method: 'recycling'
              }
            }}
          >
            <CardMedia
              className={classes.media}
              image={image}
              title="Contemplative Reptile"
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
      </div>
    </div>
  );
};

export default withStyles(styles)(ChooseMethod);
