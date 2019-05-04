import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from '../pages/Home';
import ChooseMethod from '../pages/ChooseMethod';
import ChooseLitter from '../pages/ChooseLitter';
import Compost from '../pages/Compost';
import Recycling from '../pages/Recycling';
import Landfill from '../pages/Landfill';

export default () => (
  <Switch>
    <Route exact path="/home" component={Home} />
    <Route exact path="/choose-litter" component={ChooseLitter} />
    <Route exact path="/choose-method" component={ChooseMethod} />
    <Route exact path="/compost" component={Compost} />
    <Route exact path="/landfill" component={Landfill} />
    <Route exact path="/recycling" component={Recycling} />
    <Redirect to="/home" />
  </Switch>
);
