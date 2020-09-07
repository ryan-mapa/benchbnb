import React from 'react';
import ErrorMessage from '../errors/errorMessage';

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
    const errors = this.props.errors;
    return (
      <div className="session-form-container">
        <h1>{this.props.formType === "login" ? "Log In" : "Sign Up"} Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Email:
            <input type="email" onChange={this.handleUpdate("email")} value={this.state.email}/>
          </label>
          <ErrorMessage errors={errors} type="email" />
          <label>Password:
            <input type="password" onChange={this.handleUpdate("password")} value={this.state.password}/>
          </label>
          <ErrorMessage errors={errors} type="password"/>
          <input type="submit" value={this.props.formType === "login" ? "Log In" : "Sign Up"}/>
          <ErrorMessage errors={errors} type="general" />
        </form>
      </div>
    )
  }
}

export default SessionForm;