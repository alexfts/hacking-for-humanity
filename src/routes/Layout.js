import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from '../pages/Home';
import Start from '../pages/Start';
import ChooseMethod from '../pages/ChooseMethod';

export default () => (
  <Switch>
    <Route exact path="/home" component={Home} />
    <Route exact path="/start" component={Start} />
    <Route exact path="/choose-method" component={ChooseMethod} />

    <Redirect to="/home" />
  </Switch>
);
