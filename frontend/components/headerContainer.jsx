import React from 'react';
import { connect } from 'react-redux';
import Greeting from './session/greeting';
import { logout } from '../actions/sessionActions';
import { withRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogoClick = this.handleLogoClick.bind(this);
  }

  handleLogoClick() {
    this.props.history.push('/');
  }

  render() {
    const { currentUser, logout } = this.props;
    return (
      <div className="header-container">
        <div className="logo" onClick={this.handleLogoClick}>
          <img className="logo-img" src="/assets/app_academy_logo.png" alt="aalogo"/>
          <h1>BenchBnB</h1>
        </div>
        <Greeting currentUser={currentUser} logout={logout} />
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId]
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));