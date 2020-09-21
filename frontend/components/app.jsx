import React from 'react';
import HeaderContainer from './headerContainer';
import LoginFormContainer from '../components/session/loginFormContainer';
import SignupFormContainer from './session/signupFormContainer';
import { Switch, Route } from 'react-router-dom';
import Background from './background';
import Main from './main';

const App = (props) => (
  <>
    <HeaderContainer />
    <Main />
  </>
)

export default App;   