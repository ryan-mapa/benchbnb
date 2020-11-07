import React from 'react';
import LoginFormContainer from '../components/session/loginFormContainer';
import SignupFormContainer from './session/signupFormContainer';
import { Switch, Route, Redirect } from 'react-router-dom';
import Background from './background';
import { AuthRoute } from './util/routeUtil';
import benchShowContainer from './errors/benches/benchShowContainer';

const Main = (props) => (
  <div className="main-container">
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/benches/:benchId" component={benchShowContainer}/>
      <Redirect to="/" />
    </Switch>
    <Background />
  </div>
)

export default Main;   