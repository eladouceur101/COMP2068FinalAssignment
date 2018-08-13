import React, { Fragment } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Heading from './partials/header';
import Footing from './partials/footer';
import Home from './pages/index';
import New from './pages/create';
import View from './pages/view';

const App = () => (
  <Router>
    <Fragment>
      <Heading />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={New} />
        <Route path="/view" component={View} />
      </Switch>
      <Footing />
    </Fragment>
  </Router>
);

export default App;
