import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentuser, logout}) => {
  let buttons;
  if (currentuser) {
    buttons = (<div><div className="session-button" onClick={logout}>Log Out</div></div>)
  } else {
    buttons = (<div className="greeting-buttons">  
                <div className="session-button"><Link to="/login">Log In</Link></div>
                <div className="session-button"><Link to="/signup">Sign up</Link></div>
              </div>)
  }
  
  return (<div className="greeting-container">
    <h2>{currentuser ? `Hello again, ${currentuser.email}` : ""}</h2>
    {buttons}
  </div>)
};

export default Greeting;