import React from 'react';
import ErrorMessage from '../errors/errorMessage';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "", password: ""};
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
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

  handleDemo(e) {
    e.preventDefault();
    this.props.processForm({
      email: "guest@aa.io",
      password: "go_bench_go"
    }).then(() => {
      this.props.clearErrors();
      this.props.history.push('/');
    });
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  render() {
    const errors = this.props.errors;
    
    const demoButton = <input className="session-submit" type="button" onClick={this.handleDemo} value="Demo" />;
    const demoButtonPlace = this.props.formType === "login" ? demoButton : null;

    return (
      <div className="session-form-container">
        <h2>{this.props.formType === "login" ? "Log In" : "Sign Up"}</h2>
        <form onSubmit={this.handleSubmit}>
          <input className="session-input" 
              type="email" 
              onChange={this.handleUpdate("email")} 
              value={this.state.email}
              placeholder="Email"
          />
          <ErrorMessage errors={errors} type="email" />
          <input className="session-input" 
              type="password" 
              onChange={this.handleUpdate("password")} 
              value={this.state.password}
              placeholder="Password"
          />
          <ErrorMessage errors={errors} type="password"/>
          <input className="session-submit" type="submit" value={this.props.formType === "login" ? "Log In" : "Sign Up"}/>
          {demoButtonPlace}
          <ErrorMessage errors={errors} type="general" />
        </form>
      </div>
    )
  }
}

export default SessionForm;