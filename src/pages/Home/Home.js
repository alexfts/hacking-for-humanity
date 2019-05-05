import React from 'react';
import { Link } from 'react-router-dom';
import { Button, withStyles, Typography, Grid } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';
import range from 'lodash-es/range';

import styles from './styles';
import './styles.css';

const items = range(4);
const interp = i => r =>
  `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;

const Recyclables = ({ classes }) => {
  const { radians } = useSpring({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI });
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true
  });
  return items.map(i => (
    <animated.div
      key={i}
      className="script-bf-box"
      // className={classes.script}
      style={{ transform: radians.interpolate(interp(i)) }}
    />
  ));
};

// const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
// const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
// const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
// const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
// const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

// function Card() {
//   const [props, set] = useSpring(() => ({
//     xy: [0, 0],
//     config: { mass: 10, tension: 550, friction: 140 }
//   }));
//   return (
//     <div
//       class="container"
//       onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
//     >
//       <animated.div
//         class="card1"
//         style={{ transform: props.xy.interpolate(trans1) }}
//       />
//       <animated.div
//         class="card2"
//         style={{ transform: props.xy.interpolate(trans2) }}
//       />
//       <animated.div
//         class="card3"
//         style={{ transform: props.xy.interpolate(trans3) }}
//       />
//       <animated.div
//         class="card4"
//         style={{ transform: props.xy.interpolate(trans4) }}
//       />
//     </div>
//   );
// }

const Home = ({ classes }) => (
  <Grid
    container
    className={classes.container}
    direction="row"
    alignItems="center"
    justify="center"
  >
    <Grid item xs={12} sm={12} md={6} className={classes.item}>
      <Typography variant="h1" className={classes.headline}>
        Reduce. Reuse. Recycle.
      </Typography>
    </Grid>
    <Grid item xs={12} sm={12} md={6} className={classes.item}>
      <Button
        variant="outlined"
        aria-label="Select your trash"
        component={Link}
        to="/choose-litter"
        color="secondary"
      >
        Start
      </Button>
      <Recyclables />
      {/* <Card /> */}
    </Grid>
  </Grid>
);

export default withStyles(styles)(Home);
