import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Home = props => (
  <div>
    Home page!
    <Button aria-label="Select your trash" component={Link} to="/choose-method">
      Start
    </Button>
  </div>
);

export default Home;
