import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from '../pages/Home';
import Start from '../pages/Start';

export default () => (
  <Switch>
    <Route exact path="/home" component={Home} />
    <Route exact path="/start" component={Start} />
    <Redirect to="/home" />
  </Switch>
);
