import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import CreateRide from './Pages/CreateRide';
import AllRides from './Pages/AllRides';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/create-ride" component={CreateRide} />
          <Route path="/all-rides" component={AllRides} />
        </Switch>
      </Router>
    );
  }
}

export default App;
