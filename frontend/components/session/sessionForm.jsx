import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="session-form-container">
        <h1>{this.props.formType === "login" ? "Log In" : "Sign Up"} Form</h1>
        
      </div>
    )
  }
}

export default SessionForm;