import React from 'react';
import HeaderContainer from './headerContainer';
import LoginFormContainer from '../components/session/loginFormContainer';
import SignupFormContainer from './session/signupFormContainer';
import { Switch, Route } from 'react-router-dom';
import Background from './background';

const App = (props) => (
  <>
    <HeaderContainer />
    <Route path="/login" component={LoginFormContainer}/>
    <Route path="/signup" component={SignupFormContainer}/>
    <Background />
  </>
)

export default App;   