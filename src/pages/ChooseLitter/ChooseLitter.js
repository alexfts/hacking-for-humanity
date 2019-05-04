import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const ChooseLitter = props => (
  <div>
    Pick your litter!
    <Button component={Link} to="/choose-method">
      pick recycling method
    </Button>
  </div>
);

export default ChooseLitter;
