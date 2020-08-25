import { connect } from 'react-redux';
import { login } from '../../actions/sessionActions';
import SessionForm from "./sessionForm";

const mapStateToProps = (state) => ({
  formType: 'login',
  errors: state.errors.sessionErrors
})

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);