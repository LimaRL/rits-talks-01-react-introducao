import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Projects from '../pages/Projects';

function routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/projects" component={Projects} />
    </Switch>
  );
}

export default routes;
