import React from 'react';
import { connect } from 'react-redux';
import Greeting from './session/greeting';
import { logout } from '../actions/sessionActions';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, logout } = this.props;
    return (
      <div className="header-container">
        <h1>BenchBnB</h1>
        <Greeting currentuser={currentUser} logout={logout} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);