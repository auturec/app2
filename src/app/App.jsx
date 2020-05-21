import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from 'components/NavBar';

import Onboarding from 'routes/Onboarding';
import Forum from 'routes/Forum';
import ForumPost from 'routes/ForumPost';
import Testimonial from 'routes/Testimonial';
import Faq from 'routes/Faq';
import Profile from 'routes/Profile';
import Signin from 'routes/Signin';
import Signup from 'routes/Signup';
import Account from 'routes/Account';
import ForgotPassword from 'routes/ForgotPassword';

// Games Components
import Associate from 'routes/Cognitive/Associate';
import Tiles from 'routes/Cognitive/Tiles';
import Occupations from 'routes/Languages/Occupations';
import Numbers from 'routes/Numbers';
import Words from 'routes/Languages/Words';
import Colors from 'routes/Cognitive/Colors';

import {
  SIGNIN,
  SIGNUP,
  FORUM,
  FORUM_ID,
  TESTIMONIAL,
  PROFILE,
  FAQ,
  ONBOARDING,
  ACCOUNT,
  FORGOT_PASSWORD,
  ASSOCIATE,
  TILES,
  OCCUPATIONS,
  NUMBERS,
  COLORS,
  WORDS,
} from 'constants/routes';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path={ONBOARDING} component={Onboarding} />
        <Route exact path={SIGNIN} component={Signin} />
        <Route exact path={SIGNUP} component={Signup} />
        <Route exact path={FORUM} component={Forum} />
        <Route exact path={FORUM_ID} component={ForumPost} />
        <Route exact path={TESTIMONIAL} component={Testimonial} />
        <Route exact path={PROFILE} component={Profile} />
        <Route exact path={FAQ} component={Faq} />
        <Route exact path={ACCOUNT} component={Account} />
        <Route exact path={FORGOT_PASSWORD} component={ForgotPassword} />
        <Route exact path={ASSOCIATE} component={Associate} />
        <Route exact path={TILES} component={Tiles} />
        <Route exact path={OCCUPATIONS} component={Occupations} />
        <Route exact path={NUMBERS} component={Numbers} />
        <Route exact path={WORDS} component={Words} />
        <Route exact path={COLORS} component={Colors} />
      </Switch>
    </Router>
  );
};

export default App;
