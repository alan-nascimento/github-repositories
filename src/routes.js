import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import Repositories from './components/Repositories';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repositories/:repository" component={Repositories} />
      </Switch>
    </BrowserRouter>
  );
}
