import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/sessionActions';
import SessionForm from "./sessionForm";


const mapStateToProps = (state) => ({
  formType: 'login',
  errors: state.errors.sessionErrors
})

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearSessionErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);