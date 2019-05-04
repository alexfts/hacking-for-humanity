import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Landfill = props => (
  <div>
    Landfill
    <Button component={Link} to="/start">
      Unlock other litters!
    </Button>
  </div>
);

export default Landfill;
