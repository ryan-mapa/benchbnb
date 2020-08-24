import React from 'react';
import { connect } from 'react-redux';
import Greeting from './session/greeting';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentUser = this.props.currentUser;
    return (
      <div className="header-container">
        <h1>BenchBnB</h1>
        <Greeting currentuser={currentUser} />
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Header);