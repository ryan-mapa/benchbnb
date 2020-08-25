import React from 'react';
import { logout } from '../../util/sessionApiUtil';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "", password: ""};
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdate(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className="session-form-container">
        <h1>{this.props.formType === "login" ? "Log In" : "Sign Up"} Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Email:
            <input type="email" onChange={this.handleUpdate("email")} value={this.state.email}/>
          </label>
          <br/>
          <label>Password:
            <input type="password" onChange={this.handleUpdate("password")} value={this.state.password}/>
          </label>
          <input type="submit" value={this.props.formType === "login" ? "Log In" : "Sign Up"}/>
        </form>
      </div>
    )
  }
}

export default SessionForm;