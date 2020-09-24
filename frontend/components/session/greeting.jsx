import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  let buttons;
  let username;
  if (currentUser) {
    buttons = (<div><div className="session-button" onClick={logout}>Log Out</div></div>)
    username = currentUser.email[0].toUpperCase() + currentUser.email.slice(1, currentUser.email.indexOf("@"));
  } else {
    buttons = (<div className="greeting-buttons">  
                  <Link className="session-button" to="/login">Log In</Link>
                  <Link className="session-button" to="/signup">Sign up</Link>
              </div>)
  }
  return (<div className="greeting-container">
    <h2>{currentUser ? `Hello again, ${username}!` : ""}</h2>
    {buttons}
  </div>)
};

export default Greeting;