import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import NavBar from '../components/NavBar'

import Onboarding from '../routes/Onboarding';
import Forum from '../routes/Forum';
import ForumPost from '../routes/ForumPost'
import Testimonial from '../routes/Testimonial';
import Faq from '../routes/Faq';
import Profile from '../routes/Profile';
import Signin from '../routes/Signin';
import Signup from '../routes/Signup';

import {
  SIGNIN,
  SIGNUP,
  FORUM,
  FORUM_ID,
  TESTIMONIAL,
  PROFILE,
  FAQ,
  ONBOARDING,
} from '../constants/routes'

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path={SIGNIN} component={Signin} />
        <Route exact path={SIGNUP} component={Signup} />
        <Route exact path={FORUM} component={Forum} />
        <Route exact path={FORUM_ID} component={ForumPost} />
        <Route exact path={TESTIMONIAL} component={Testimonial} />
        <Route exact path={PROFILE} component={Profile} />
        <Route exact path={FAQ} component={Faq} />
        <Route exact path={ONBOARDING} component={Onboarding} />
      </Switch>
    </Router>
  );
}

export default App;
