import { connect } from 'react-redux';
import { singup, clearSessionErrors } from '../../actions/sessionActions';
import SessionForm from "./sessionForm";

const mapStateToProps = (state) => ({
  formType: 'signup',
  errors: state.errors.sessionErrors
})

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(singup(user)),
  clearErrors: () => dispatch(clearSessionErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);