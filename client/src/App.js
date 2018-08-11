import React, { Fragment } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Heading from './partials/header';
import Footing from './partials/footer';
import Home from './home/index';

const App = () => (
  <Router>
    <Fragment>
      <Heading />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/contacts" component={Contacts} />
      <Route path="/services/wsib" component={Wsib} />
      <Route path="/services/ltd" component={Ltd} />
      <Route path="/services/cpp" component={Cpp} /> */}
      </Switch>
      <Footing />
    </Fragment>
  </Router>
);

export default App;
