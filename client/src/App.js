import React, { Fragment } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Heading from './partials/header';
import Footing from './partials/footer';
import Home from './pages/index';
import New from './pages/create';

const App = () => (
  <Router>
    <Fragment>
      <Heading />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={New} />
      </Switch>
      <Footing />
    </Fragment>
  </Router>
);

export default App;
