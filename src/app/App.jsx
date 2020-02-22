import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Signin from '../routes/Signin';
import Signup from '../routes/Signup';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
