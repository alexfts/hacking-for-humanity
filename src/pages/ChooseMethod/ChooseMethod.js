import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const ChooseMethod = props => (
  <div>
    Where would you put the trash?
    <Button component={Link} to="/landfill">
      trash
    </Button>
    <Button component={Link} to="/compost">
      Compost
    </Button>
    <Button component={Link} to="/recycling">
      Recycling
    </Button>
  </div>
);

export default ChooseMethod;
