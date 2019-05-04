import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Recycling = props => (
  <div>
    Recycling
    <Button component={Link} to="/start">
      Unlock other litters!
    </Button>
  </div>
);

export default Recycling;
