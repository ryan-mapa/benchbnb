import React from 'react';

const Greeting = ({currentuser}) => (
  <div>{currentuser ? "Someone is logged in" : "Nobody logged in"}</div>
);

export default Greeting;