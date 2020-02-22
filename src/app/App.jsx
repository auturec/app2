import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Onboarding from '../routes/Onboarding';
import Signin from '../routes/Signin';
import Signup from '../routes/Signup';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Onboarding} />
      </Switch>
    </Router>
  );
}

export default App;
