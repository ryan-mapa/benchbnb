import React from 'react';
import HeaderContainer from './headerContainer';
import LoginFormContainer from '../components/session/loginFormContainer';
import SignupFormContainer from './session/signupFormContainer';
import { Switch, Route } from 'react-router-dom';

const App = (props) => (
  <>
    <HeaderContainer />
    <Route path="/login" component={LoginFormContainer}/>
    <Route path="/signup" component={SignupFormContainer}/>
    <div className="background-shading"></div>
    <img className="background-img" src="/assets/pier_bench.jpg" alt="bench-background"/>
  </>
)

export default App;   