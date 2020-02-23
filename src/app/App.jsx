import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Onboarding from '../routes/Onboarding';
import Forum from '../routes/Forum';
import ForumPost from '../routes/ForumPost'
import Testimonial from '../routes/Testimonial';
import Faq from '../routes/Faq';
import Profile from '../routes/Profile';
import Signin from '../routes/Signin';
import Signup from '../routes/Signup';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/forum" component={Forum} />
        <Route exact path="/forum/:id" component={ForumPost} />
        <Route exact path="/testimonial" component={Testimonial} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/" component={Onboarding} />
      </Switch>
    </Router>
  );
}

export default App;
